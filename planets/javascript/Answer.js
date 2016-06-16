// JavaScript File

function Answer(correct, planet)
{
    this.correct = correct;
    this.planet = planet;
    
    this.onclickFunction = function()
    {
        if(this.correct === true) { return "correct()"; }
        else { return "incorrect()"; }
    };
    
    this.imageFileName = function()
    {
        return this.planet.filename; 
    };
}
