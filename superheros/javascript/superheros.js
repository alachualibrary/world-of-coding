// JavaScript File

var stepNumber = 0;
var countCorrect = 0;
var resetButton = document.getElementById("resetButton");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var image4 = document.getElementById("image4");
window.onload = loadSquares;

function Quiz(questions)
{
    this.questions = questions;
    this.incrementStep = function() 
    {
        stepNumber++;
        if(stepNumber < questions.length) 
        {
            loadSquares(); 
        }
        else 
        {
            disableSquaresAndEnableResetButton(); 
        }
    };
}

var quiz = new Quiz([question1, question2, question3, question4]);

function loadSquares()
{
    var questionText = quiz.questions[stepNumber].questionText;
    var firstAnswer  = quiz.questions[stepNumber].answer1;
    var secondAnswer = quiz.questions[stepNumber].answer2;
    var thirdAnswer  = quiz.questions[stepNumber].answer3;
    var fourthAnswer = quiz.questions[stepNumber].answer4;

    image1.src = "./images/" + firstAnswer.imageFileName();
    image1.setAttribute("onclick", firstAnswer.onclickFunction());

    image2.src = "./images/" + secondAnswer.imageFileName();
    image2.setAttribute("onclick", secondAnswer.onclickFunction());

    image3.src = "./images/" + thirdAnswer.imageFileName();
    image3.setAttribute("onclick", thirdAnswer.onclickFunction());

    image4.src = "./images/" + fourthAnswer.imageFileName();
    image4.setAttribute("onclick", fourthAnswer.onclickFunction());

    document.getElementById("questionNumber").innerHTML = stepNumber + 1;
    document.getElementById("questionText").innerHTML = questionText;
    document.getElementById("countCorrect").innerHTML = countCorrect;
    document.getElementById("totalSteps").innerHTML = quiz.questions.length;
}

function resetGame()
{
    stepNumber = 0;
    countCorrect = 0;
    resetButton.className = "hidden";
    loadSquares();
}

function disableSquaresAndEnableResetButton()
{
    image1.setAttribute("onclick", null);
    image2.setAttribute("onclick", null);
    image3.setAttribute("onclick", null);
    image4.setAttribute("onclick", null);
    resetButton.className = "notHidden"; 
    document.getElementById("countCorrect").innerHTML = countCorrect;
}

function correct()
{
    countCorrect++;
    quiz.incrementStep();
}

function incorrect()
{
    quiz.incrementStep();
}
/*global question1*/
/*global question2*/
/*global question3*/
/*global question4*/
