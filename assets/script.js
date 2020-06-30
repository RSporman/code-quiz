
var questionList = [
    {
        "question": "What wide reciever has the best single season touchdown record?",
        "a": "Jerry Rice",
        "b": "Terrell Owens",
        "c": "Randy Moss",
        "d": "Marvin Harrison",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "What NBA fracnchise has the most championships?",
        "a": "Boston Celtics",
        "b": "Los Angeles Lakers",
        "c": "Chicago Bulls",
        "d": "Golden State Warriors",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "What NFL quarterback has the most passing yards in a single season?",
         "a": "Drew Brees",
         "b": "Peyton Manning",
         "c": "Tom Brady",
         "d": "Jameis Winston",
         "correct": "b",
         "userAnswer": null
        },
        {
        "question": "How many MVP's does Lebron James have?",
         "a": "3",
         "b": "4",
         "c": "5",
         "d": "6",
         "correct": "b",
         "userAnswer": null
        },
        {
        "question": "How many championships does Kobe Bryant have?",
         "a": "3",
         "b": "4",
         "c": "5",
         "d": "6",
         "correct": "c",
         "userAnswer": null
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
    var fiveMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var score = document.body.querySelector("#score");

var questionIndex = 0;

function buttonHandler(event) {
    
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    console.log(button);
    console.log(userAnswer);
    console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    if(questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]){
        score.textContent = "Touchdown!";
        setTimeout(function(){
            questionIndex++;
            initializeQuestion();
            score.textContent= "";
        }, 5000);
    }
    else{
        score.textContent = "Fumble!";
        setTimeout(function(){
            questionIndex++;
            initializeQuestion();
            score.textContent= "";
        }, 5000);
    }
}

buttonA.addEventListener("click",buttonHandler);
buttonB.addEventListener("click",buttonHandler);
buttonC.addEventListener("click",buttonHandler);
buttonD.addEventListener("click",buttonHandler);

function initializeQuestion(){
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    console.log(question);
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    answerTagA.textContent = wholeObj.a;
    answerTagB.textContent = wholeObj.b;
    answerTagC.textContent = wholeObj.c;
    answerTagD.textContent = wholeObj.d;
    buttonA.setAttribute("data-question", questionIndex);
    buttonB.setAttribute("data-question", questionIndex);
    buttonC.setAttribute("data-question", questionIndex);
    buttonD.setAttribute("data-question", questionIndex);
}
initializeQuestion();



