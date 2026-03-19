#!/usr/bin/env python3
"""Convert a quiz PDF into quiz JSON/JS for the browser app.

Usage:
  python tools/parse_quiz_pdf.py input.pdf --format js --var-name myQuiz --out quizbanks/myquiz.js
  python tools/parse_quiz_pdf.py input.pdf --format json --out quizbanks/myquiz.json

Notes:
- Works best when the PDF is single-column or has clean text extraction.
- For heavily formatted two-column PDFs, you may need to inspect the output and fix a few questions manually.
- Multiple-answer questions are detected from 'Answer:' vs 'Answers:' lines.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import List, Dict, Any

try:
    from pypdf import PdfReader
except Exception as exc:  # pragma: no cover
    raise SystemExit("Please install pypdf first: pip install pypdf") from exc

QUESTION_START_RE = re.compile(r"^\s*(\d{1,3})\s*$")
OPTION_RE = re.compile(r"^([A-D])\.\s*(.+?)\s*$")
ANSWER_RE = re.compile(r"^Answers?:\s*([A-D](?:\s*,\s*[A-D])*)\s*$", re.IGNORECASE)
CHOOSE_RE = re.compile(r"\(Choose\s+(two|three|four|\d+)\)", re.IGNORECASE)

WORD_TO_NUMBER = {
    "two": 2,
    "three": 3,
    "four": 4,
}


def extract_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    pages = []
    for page in reader.pages:
        pages.append(page.extract_text() or "")
    return "\n".join(pages)


def clean_lines(text: str) -> List[str]:
    text = text.replace("\u200b", "")
    text = text.replace("\ufeff", "")
    lines = []
    for raw in text.splitlines():
        line = " ".join(raw.split())
        if line:
            lines.append(line)
    return lines


def lines_to_questions(lines: List[str]) -> List[Dict[str, Any]]:
    questions: List[Dict[str, Any]] = []
    current: Dict[str, Any] | None = None
    question_chunks: List[str] = []
    explanation_chunks: List[str] = []

    def finalize_current() -> None:
        nonlocal current, question_chunks, explanation_chunks
        if not current:
            return
        current["question"] = " ".join(question_chunks).strip()
        if explanation_chunks:
            current["explanation"] = " ".join(explanation_chunks).strip()
        if current.get("question") and len(current.get("choices", [])) >= 2 and current.get("answers"):
            questions.append(current)
        current = None
        question_chunks = []
        explanation_chunks = []

    in_explanation = False

    for line in lines:
        q_match = QUESTION_START_RE.match(line)
        if q_match:
            finalize_current()
            current = {
                "sourceNumber": int(q_match.group(1)),
                "question": "",
                "choices": [],
                "answers": [],
            }
            in_explanation = False
            continue

        if current is None:
            continue

        answer_match = ANSWER_RE.match(line)
        if answer_match:
            current["answers"] = [part.strip().upper() for part in answer_match.group(1).split(",")]
            in_explanation = False
            continue

        if line.startswith("Explanation:"):
            explanation_chunks.append(line.replace("Explanation:", "", 1).strip())
            in_explanation = True
            continue

        option_match = OPTION_RE.match(line)
        if option_match:
            current["choices"].append({
                "key": option_match.group(1),
                "text": option_match.group(2),
            })
            in_explanation = False
            continue

        if in_explanation:
            explanation_chunks.append(line)
        else:
            question_chunks.append(line)

    finalize_current()
    return questions


def post_process(questions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    cleaned: List[Dict[str, Any]] = []
    for item in questions:
        question = item["question"]
        question = re.sub(r"\s+", " ", question).strip()
        if question.upper().startswith("DEVNET ASSOCIATE"):
            continue
        choose_match = CHOOSE_RE.search(question)
        if choose_match and not item["answers"]:
            count = choose_match.group(1).lower()
            if count.isdigit():
                item["expectedSelections"] = int(count)
            elif count in WORD_TO_NUMBER:
                item["expectedSelections"] = WORD_TO_NUMBER[count]
        item["question"] = question
        cleaned.append(item)
    return cleaned


def to_js(var_name: str, data: List[Dict[str, Any]]) -> str:
    return f"const {var_name} = {json.dumps(data, indent=2, ensure_ascii=False)};\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf_path", type=Path)
    parser.add_argument("--format", choices=["json", "js"], default="js")
    parser.add_argument("--var-name", default="generatedQuiz")
    parser.add_argument("--out", type=Path, required=True)
    args = parser.parse_args()

    text = extract_text(args.pdf_path)
    lines = clean_lines(text)
    questions = post_process(lines_to_questions(lines))

    args.out.parent.mkdir(parents=True, exist_ok=True)
    if args.format == "json":
        args.out.write_text(json.dumps(questions, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    else:
        args.out.write_text(to_js(args.var_name, questions), encoding="utf-8")

    print(f"Wrote {len(questions)} questions to {args.out}")


if __name__ == "__main__":
    main()
