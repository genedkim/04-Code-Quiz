
var timeLeft = document.querySelector("#time-left");
var startQuizBtn = document.querySelector("#start-quiz-btn");



var quiz = [
    {
        'question': 'Commonly used data types DO NOT include:',
        'choices': ['strings','booleans','alerts','numbers'],
        'answer': 2
    }, {
        'question': 'The condition in an if/else statement is enclosed within ______.',
        'choices': ['quotes','curly brackets','parentheses','square brackets'],
        'answer': 2
    }, {
        'question': 'Arrays in JavaScript can be used to store ______.',
        'choices': ['numbers and strings','other arrays','booleans','all of the above'],
        'answer': 3
    }, {
        'question': 'String values must be enclosed within ______ when being assigned to variables.',
        'choices': ['quotes','commas','curly brackets','parentheses'],
        'answer': 0
    }, {
        'question': 'A very useful tool used during development and debugging for printing content to the debugger is:',
        'choices': ['JavaScript','console.log','terminal / bash','for loops'],
        'answer': 1
    }
]

var timer = quiz.length * 15 + 1;
var initiateTime = 0;
var penalty = 15;


startQuizBtn.addEventListener("click", function() {
    if (initiateTime == 0) {
        initiateTime = setInterval(function() {
            timer--;
            timeLeft.textContent = "Time: " + timer;
            if (timer <= 0) {
                clearInterval(initiateTime);
                // All done!
            }
        }, 1000)
    }
    startQuiz();
})

function startQuiz() {
}