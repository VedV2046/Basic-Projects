const quizData = [
{
    question: "1. Which chemical is commonly added to toothpaste to prevent cavities?",
    options: ["Parabens", "Fluoride", "Ammonia", "Ethanol"],
    answer: "Fluoride"
},
{
    question: "2. Which compound in shampoos creates foam but may irritate skin?",
    options: ["Sodium Lauryl Sulfate (SLS)", "Caffeine", "Glucose", "Vitamin C"],
    answer: "Sodium Lauryl Sulfate (SLS)"
},
{
    question: "3. Which chemical in soft drinks acts as a stimulant?",
    options: ["Caffeine", "Citric Acid", "Acetic Acid", "Iron"],
    answer: "Caffeine"
},
{
    question: "4. Sodium Benzoate is mainly used in packaged foods as a:",
    options: ["Sweetener", "Coloring Agent", "Preservative", "Flavor Enhancer"],
    answer: "Preservative"
},
{
    question: "5. Which natural alternative is safer as a cleaning agent?",
    options: ["Bleach", "Vinegar", "Ammonia", "Formaldehyde"],
    answer: "Vinegar"
}
];

const quizContainer = document.getElementById("quiz");

function loadQuiz() {
quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");
    questionDiv.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="options">
        ${q.options.map(opt => 
        `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`
        ).join("")}
    </div>
    `;
    quizContainer.appendChild(questionDiv);
});
}

function submitQuiz() {
let score = 0;
quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
    score++;
    }
});
document.getElementById("result").innerText = 
    `You scored ${score} out of ${quizData.length}!`;
}

loadQuiz();