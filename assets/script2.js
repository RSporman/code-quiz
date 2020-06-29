var quizQuestions = [
    {
        question: "What wide reciever has the best single season touchdown record?",
        answers: {
            a: 'Jerry Rice',
            b: 'Terell Owens',
            c: 'Randy Moss'
        },
        correctAnswer: 'c'
    },
    {
        question: "What NBA fracnchise has the most championships?",
        answers: {
            a: 'Boston Celtics',
            b: 'Los Angeles Lakers',
            c: 'Chicago Bulls'
        },
        correctAnswer: 'a'
    },
    {
        question: "What NFL quarterback has the most passing yards in a single season?",
        answers: {
            a: 'Drew Brees',
            b: 'Peyton Manning',
            c: 'Tom Brady'
        },
        correctAnswer: 'b'
    }
];

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

var quizContainer = document.getElementById('quiz');

function generateQuestions(questions, quizContainer)