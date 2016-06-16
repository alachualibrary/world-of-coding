// JavaScript File

function Answer(correct, superhero)
{
    this.correct = correct;
    this.superhero = superhero;
    
    this.onclickFunction = function()
    {
        if(this.correct === true) { return "correct()"; }
        else { return "incorrect()"; }
    };
    
    this.imageFileName = function()
    {
        return this.superhero.filename; 
    };
}
