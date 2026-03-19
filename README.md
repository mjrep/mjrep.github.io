# Quiz App

## Run locally

Open the folder in VS Code and use Live Server on `index.html`.

## Add another subject bank

1. Copy `quizbanks/devnet.js` to a new file, for example `quizbanks/science.js`
2. Rename the variable inside, for example `const scienceQuiz = [...]`
3. Add the script tag in `index.html` before `script.js`
4. Register it in `script.js` inside `quizBanks`

Example:

```js
const quizBanks = {
  devnet: { label: "DevNet Associate", questions: devnetQuiz },
  science: { label: "Science", questions: scienceQuiz },
};
```

## Auto-convert a PDF

Install pypdf:

```bash
pip install pypdf
```

Then run:

```bash
python tools/parse_quiz_pdf.py myfile.pdf --format js --var-name myQuiz --out quizbanks/myfile.js
```

For JSON:

```bash
python tools/parse_quiz_pdf.py myfile.pdf --format json --out quizbanks/myfile.json
```

Note: some PDFs use two-column layouts or bad text extraction. In those cases, the converter gives you a draft and you may need to fix a few entries manually.
