var myQuestions = [
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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}


// var questionList = [
//     {
//         "question": "How do I turn on my mic?",
//         "a": "Toggle switch on mic.",
//         "b": "Check if mic is compatible.",
//         "c": "Make sure it is connected.",
//         "d": "Restart your computer.",
//         "correct": "d",
//         "userAnswer": null
//     },
//     {
//         "question": "Where is the on button?",
//         "a": "Underneath laptop.",
//         "b": "Around the light.",
//         "c": "On the side.",
//         "d": "Shake it.",
//         "correct": "c",
//         "userAnswer": null
//     }
// ];

// var questionTag = document.body.querySelector("#question");
// var answerTagA = document.body.querySelector("#answer-a");
// var answerTagB = document.body.querySelector("#answer-b");
// var answerTagC = document.body.querySelector("#answer-c");
// var answerTagD = document.body.querySelector("#answer-d");

// var buttonA = document.body.querySelector("#button-a");
// var buttonB = document.body.querySelector("#button-b");
// var buttonC = document.body.querySelector("#button-c");
// var buttonD = document.body.querySelector("#button-d");

// var score = document.body.querySelector("#score");

// var questionIndex = 0;

// function buttonHandler(event) {
//     var button = event.target;
//     var userAnswer = button.getAttribute("data-answer");
//     var questionId = parseInt(button.getAttribute("data-question"));
//     console.log(button);
//     console.log(userAnswer);
//     console.log(questionId);
//     questionList[questionId]["userAnswer"] = userAnswer;

//     if(questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]){
//         score.textContent = "You got it correct";
//         setTimeout(function(){
//             questionIndex++;
//             initializeQuestion();
//             score.textContent= "";
//         }, 5000);
//     }
//     else{
//         score.textContent = "You got it wrong";
//         setTimeout(function(){
//             questionIndex++;
//             initializeQuestion();
//             score.textContent= "";
//         }, 5000);
//     }
// }

// buttonA.addEventListener("click",buttonHandler);
// buttonB.addEventListener("click",buttonHandler);
// buttonC.addEventListener("click",buttonHandler);
// buttonD.addEventListener("click",buttonHandler);

// function initializeQuestion(){
//     console.log(questionList[questionIndex]);
//     var wholeObj = questionList[questionIndex];
//     var question = wholeObj.question;
//     console.log(question);
//     questionTag.textContent = question;
//     questionTag.setAttribute("data-question", questionIndex);

//     answerTagA.textContent = wholeObj.a;
//     answerTagB.textContent = wholeObj.b;
//     answerTagC.textContent = wholeObj.c;
//     answerTagD.textContent = wholeObj.d;
//     buttonA.setAttribute("data-question", questionIndex);
//     buttonB.setAttribute("data-question", questionIndex);
//     buttonC.setAttribute("data-question", questionIndex);
//     buttonD.setAttribute("data-question", questionIndex);
// }
// initializeQuestion();