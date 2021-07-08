const quizData = [{
        question: "What is the maximum possible length of an identifier?",

        a: "16",
        b: "32",
        c: "64",
        d: "None of these above",
        correct: "d",
    },
    {
        question: "Who developed the Python language?",

        a: "Zim Den",
        b: "Guido van Rossum",
        c: "Niene Stom",
        d: "Wick van Rossum",
        correct: "b",
    },
    {
        question: "Which one of the following is the correct extension of the Python file?",

        a: ".py",
        b: ".python",
        c: ".p",
        d: "None of these",
        correct: "a",
    },
    {
        question: "which year was Python language developed?",
        a: "1989",
        b: "1991",
        c: "1994",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "How to convert the uppercase letters in the string to lowercase in Python?",
        a: "lowercase()",
        b: "capilaize()",
        c: "lower()",
        d: "toLower()",
        correct: "c",
    },
    {
        question: "How to capitalize only the first letter of a sentence in Python?",
        a: "uppercase() method",
        b: "capitalize() method",
        c: "upper() method",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What do we use to define a block of code in Python language?",

        a: "Key",
        b: "Brackets",
        c: "Indentation",
        d: "None of these",
        correct: "c",

    },
    {
        question: "What is the method inside the class in python language?",

        a: "Object",
        b: "Function",
        c: "Attribute",
        d: "Argument",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});