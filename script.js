const quizBanks = {
  devnet: {
    label: "DevNet Associate",
    questions: devnetQuiz,
  },
};

const subjectSelect = document.getElementById("subject-select");
const shuffleQuestionsToggle = document.getElementById("shuffle-questions-toggle");
const shuffleChoicesToggle = document.getElementById("shuffle-choices-toggle");
const restartBtn = document.getElementById("restart-btn");
const questionCounter = document.getElementById("question-counter");
const questionSourceNumber = document.getElementById("question-source-number");
const questionText = document.getElementById("question-text");
const questionTypeHint = document.getElementById("question-type-hint");
const choicesContainer = document.getElementById("choices-container");
const answerForm = document.getElementById("answer-form");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackBox = document.getElementById("feedback-box");
const quizPanel = document.getElementById("quiz-panel");
const resultPanel = document.getElementById("result-panel");
const finalScore = document.getElementById("final-score");
const finalSummary = document.getElementById("final-summary");
const liveScore = document.getElementById("live-score");

let activeBankKey = "devnet";
let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let questionLocked = false;

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalizeQuestion(question) {
  const normalizedChoices = question.choices.map((choice) => ({ ...choice }));
  return {
    ...question,
    choices: shuffleChoicesToggle.checked ? shuffleArray(normalizedChoices) : normalizedChoices,
  };
}

function prepareQuiz() {
  const baseQuestions = quizBanks[activeBankKey].questions.map(normalizeQuestion);
  activeQuestions = shuffleQuestionsToggle.checked ? shuffleArray(baseQuestions) : baseQuestions;
  currentIndex = 0;
  score = 0;
  questionLocked = false;
  liveScore.textContent = `Score: ${score}`;
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function renderSubjectOptions() {
  subjectSelect.innerHTML = "";
  Object.entries(quizBanks).forEach(([key, bank]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${bank.label} (${bank.questions.length} questions)`;
    subjectSelect.appendChild(option);
  });
}

function renderQuestion() {
  const question = activeQuestions[currentIndex];
  questionLocked = false;
  answerForm.reset();
  feedbackBox.className = "feedback-box hidden";
  nextBtn.classList.add("hidden");
  submitBtn.disabled = false;
  submitBtn.classList.remove("hidden");

  questionCounter.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
  questionSourceNumber.textContent = question.sourceNumber ? `Source question #: ${question.sourceNumber}` : "";
  questionText.textContent = question.question;
  questionTypeHint.textContent = question.answers.length > 1
    ? `Select ${question.answers.length} answers.`
    : "Select 1 answer.";

  choicesContainer.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const label = document.createElement("label");
    label.className = "choice-card";

    const input = document.createElement("input");
    input.type = question.answers.length > 1 ? "checkbox" : "radio";
    input.name = "answer";
    input.value = choice.key;
    input.addEventListener("change", () => updateSelectionStyles());

    const letter = document.createElement("span");
    letter.className = "choice-letter";
    letter.textContent = String.fromCharCode(65 + index) + ".";

    const text = document.createElement("span");
    text.className = "choice-text";
    text.textContent = choice.text;

    label.appendChild(input);
    label.appendChild(letter);
    label.appendChild(text);
    choicesContainer.appendChild(label);
  });
  updateSelectionStyles();
}

function updateSelectionStyles() {
  const labels = choicesContainer.querySelectorAll(".choice-card");
  labels.forEach((label) => {
    const input = label.querySelector("input");
    label.classList.toggle("selected", input.checked && !questionLocked);
  });
}

function getSelectedAnswers() {
  return Array.from(choicesContainer.querySelectorAll("input:checked")).map((input) => input.value).sort();
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

function showFeedback({ correct, correctChoices, explanation }) {
  feedbackBox.className = `feedback-box ${correct ? "success" : "error"}`;
  const correctText = correctChoices.map((choice) => `${choice.key}. ${choice.text}`).join("; ");
  const explanationHtml = explanation ? `<br><br><strong>Explanation:</strong> ${explanation}` : "";
  feedbackBox.innerHTML = `${correct ? "Correct!" : "Not quite."}<br><strong>Correct answer${correctChoices.length > 1 ? "s" : ""}:</strong> ${correctText}${explanationHtml}`;
}

function markAnswers(selectedAnswers, correctAnswers) {
  const labels = choicesContainer.querySelectorAll(".choice-card");
  labels.forEach((label) => {
    const input = label.querySelector("input");
    input.disabled = true;
    const isSelected = selectedAnswers.includes(input.value);
    const isCorrect = correctAnswers.includes(input.value);

    label.classList.remove("selected");
    if (isCorrect) {
      label.classList.add("correct");
    } else if (isSelected) {
      label.classList.add("wrong");
    }
  });
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (questionLocked) return;

  const question = activeQuestions[currentIndex];
  const selectedAnswers = getSelectedAnswers();

  if (selectedAnswers.length === 0) {
    feedbackBox.className = "feedback-box error";
    feedbackBox.textContent = "Pick at least one answer before submitting.";
    return;
  }

  questionLocked = true;
  submitBtn.disabled = true;
  submitBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");

  const correctAnswers = [...question.answers].sort();
  const correct = arraysEqual(selectedAnswers, correctAnswers);
  if (correct) {
    score += 1;
    liveScore.textContent = `Score: ${score}`;
  }

  const correctChoices = question.choices.filter((choice) => correctAnswers.includes(choice.key));
  markAnswers(selectedAnswers, correctAnswers);
  showFeedback({ correct, correctChoices, explanation: question.explanation || "" });
});

nextBtn.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex >= activeQuestions.length) {
    showResults();
    return;
  }
  renderQuestion();
});

function showResults() {
  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");
  finalScore.textContent = `You got ${score} out of ${activeQuestions.length}.`;
  const percent = Math.round((score / activeQuestions.length) * 100);
  finalSummary.textContent = `Final score: ${percent}%. Use Restart quiz to try again with a new shuffle.`;
}

subjectSelect.addEventListener("change", (event) => {
  activeBankKey = event.target.value;
  prepareQuiz();
});

shuffleQuestionsToggle.addEventListener("change", prepareQuiz);
shuffleChoicesToggle.addEventListener("change", prepareQuiz);
restartBtn.addEventListener("click", prepareQuiz);

renderSubjectOptions();
prepareQuiz();
