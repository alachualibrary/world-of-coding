// JavaScript File
function Question(questionText, answer1, answer2, answer3, answer4)
{
    this.questionText = questionText;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
}
var question1 = new Question
(
    "He was a founding member of the Justice League of America, and is the king of Atlantis.",
    new Answer(true,  aquaman),
    new Answer(false, batman),
    new Answer(false, captainamerica),
    new Answer(false, catwoman)
);
var question2 = new Question
(
    "While living in the Hell's Kitchen neighborhood of New York City, Matt Murdock is blinded by a radioactive substance that falls from an oncoming vehicle while pushing a man to safety from the oncoming truck. While he no longer can see, the radioactive exposure heightens his remaining senses beyond normal human ability and gives him a \"radar sense.\"",
    new Answer(false,  cyclops),
    new Answer(true, daredevil),
    new Answer(false, falcon),
    new Answer(false, gambit)
);
var question3 = new Question
(
    "Who is a large green humanoid that possesses superhuman strength and invulnerability, attributes that grow more potent the angrier he becomes?",
    new Answer(false,  greenhornet),
    new Answer(false, greenlantern),
    new Answer(true, hulk),
    new Answer(false, humantorch)
);
var question4 = new Question
(
    "His signature weapons are two katanas. Leonardo is the most spiritual, the most disciplined, and the most in-line with Splinter's teachings and thoughts. He is named after Leonardo da Vinci.",
    new Answer(false,  iceman),
    new Answer(false, invisiblewoman),
    new Answer(false, ironman),
    new Answer(true, leonardo)
);
/*global aquaman*/
/*global batman*/
/*global captainamerica*/
/*global catwoman*/
/*global cyclops*/
/*global daredevil*/
/*global falcon*/
/*global gambit*/
/*global greenhornet*/
/*global greenlantern*/
/*global hulk*/
/*global humantorch*/
/*global iceman*/
/*global invisiblewoman*/
/*global ironman*/
/*global leonardo*/
/*global mrfantastic*/
/*global spiderman*/
/*global storm*/
/*global superman*/
/*global thing*/
/*global thor*/
/*global wolverine*/
/*global wonderwoman*/
/*global Answer*/


