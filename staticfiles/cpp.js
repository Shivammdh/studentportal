const quizData = [{
        question: "Which of the following is the correct identifier in CPP?",

        a: "$var_name",
        b: "VAR_123",
        c: "varname@",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is the address operator?",

        a: "@",
        b: "#",
        c: "&",
        d: "%",
        correct: "c",
    },
    {
        question: "Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
        a: "Encapsulation",
        b: "Inheritance",
        c: "Polymorphism",
        d: "All of the above",
        correct: "d",
    },
    {
        question: " The programming language that has the ability to create new data types is called___.",

        a: "Overloaded",
        b: "Encapsulated",
        c: "Reprehensible",
        d: "Extensible",
        correct: "d",
    },
    {
        question: "Which of the following is the original creator of the C++ language?",

        a: "Dennis Ritchie",
        b: "Ken Thompson",
        c: "Bjarne Stroustrup",
        d: "Brian Kernighan",
        correct: "c",
    },
    {
        question: "Which of the following is the correct syntax to read the single character to console in the C++ language?",

        a: "Read ch()",
        b: "Getline vh()",
        c: "get(ch)",
        d: "Scanf(ch)e",
        correct: "c",
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