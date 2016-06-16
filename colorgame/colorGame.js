// JavaScript File
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

var stepNumber = 0;
var countCorrect = 0;
var resetButton = document.getElementById("resetButton");
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var step1 = new Step
(
    new Square("Red",  "red"),
    new Square("Blue", "green"),
    new Square("Green", "yellow"),
    new Square("Yellow", "blue")
);
var step2 = new Step
(
    new Square("Red",  "yellow"),
    new Square("Blue", "blue"),
    new Square("Green", "red"),
    new Square("Yellow", "green")
);
var step3 = new Step
(
    new Square("Red",  "blue"),
    new Square("Blue", "yellow"),
    new Square("Green", "green"),
    new Square("Yellow", "red")
);
var step4 = new Step
(
    new Square("Red",  "green"),
    new Square("Blue", "red"),
    new Square("Green", "blue"),
    new Square("Yellow", "yellow")
);
var quiz = new Quiz([step1, step2, step3, step4]);
window.onload = loadSquares;

function Square(label, color)
{
    this.label = label;
    this.color = color;
    
    this.onclickFunction = function()
    {
        if(this.isCorrect() === true) { return "correct()"; }
        else { return "incorrect()"; }
    };
    
    this.colorClass = function()
    {
        return this.color; 
    };
    
    this.isCorrect = function()
    {
        return (capitalizeFirstLetter(color) === label);
    };
}

function Step(square1, square2, square3, square4)
{
    this.square1 = square1;
    this.square2 = square2;
    this.square3 = square3;
    this.square4 = square4;
}

function Quiz(steps)
{
    this.steps = steps;
    this.incrementStep = function() 
    {
        stepNumber++;
        if(stepNumber < steps.length) 
        {
            loadSquares(); 
        }
        else 
        {
            disableSquaresAndEnableResetButton(); 
        }
    };
}

function resetGame()
{
    stepNumber = 0;
    countCorrect = 0;
    resetButton.className = "hidden";
    loadSquares();
}

function loadSquares()
{
    var firstSquare  = quiz.steps[stepNumber].square1;
    var secondSquare = quiz.steps[stepNumber].square2;
    var thirdSquare  = quiz.steps[stepNumber].square3;
    var fourthSquare = quiz.steps[stepNumber].square4;

    cell1.className = firstSquare.colorClass() + " table-cell";
    cell1.setAttribute("onclick", firstSquare.onclickFunction());
    cell1.innerHTML = firstSquare.label;

    cell2.className = secondSquare.colorClass() + " table-cell";
    cell2.setAttribute("onclick", secondSquare.onclickFunction());
    cell2.innerHTML = secondSquare.label;

    cell3.className = thirdSquare.colorClass() + " table-cell";
    cell3.setAttribute("onclick", thirdSquare.onclickFunction());
    cell3.innerHTML = thirdSquare.label;

    cell4.className = fourthSquare.colorClass() + " table-cell";
    cell4.setAttribute("onclick", fourthSquare.onclickFunction());
    cell4.innerHTML = fourthSquare.label;

    document.getElementById("step").innerHTML = stepNumber + 1;
    document.getElementById("countCorrect").innerHTML = countCorrect;
    document.getElementById("totalSteps").innerHTML = quiz.steps.length;
}

function disableSquaresAndEnableResetButton()
{
    cell1.setAttribute("onclick", null);
    cell2.setAttribute("onclick", null);
    cell3.setAttribute("onclick", null);
    cell4.setAttribute("onclick", null);
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

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
