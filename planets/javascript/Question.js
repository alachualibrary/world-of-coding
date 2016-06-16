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
    "Which of these is Ceres, the largest object in the asteroid belt that lies between the orbits of Mars and Jupiter?",
    new Answer(true,  ceres),
    new Answer(false, earth_moon_luna),
    new Answer(false, jupiter),
    new Answer(false, jupiter_moon_callisto)
);
var question2 = new Question
(
    "Which of these is Ganymede, a moon of Jupiter?",
    new Answer(false, jupiter_moon_europa),
    new Answer(true,  jupiter_moon_ganymede),
    new Answer(false, jupiter_moon_io),
    new Answer(false, mars)
);
var question3 = new Question
(
    "Which of these is the planet Mercury, the smallest planet in the Solar System and the one closest to the Sun?",
    new Answer(false, mars_moon_deimos),
    new Answer(false, mars_moon_phobos),
    new Answer(true,  mercury),
    new Answer(false, neptune)
);
var question4 = new Question
(
    "Which of these is Nix, one of the four xmall moons of pluto?",
    new Answer(false, neptune_moon_triton),
    new Answer(false, pluto),
    new Answer(false, pluto_moon_charon),
    new Answer(true,  pluto_moon_nix)
);
/*global Answer*/
/*global ceres*/
/*global earth_moon_luna*/
/*global jupiter*/
/*global jupiter_moon_callisto*/
/*global jupiter_moon_europa*/
/*global jupiter_moon_ganymede*/
/*global jupiter_moon_io*/
/*global mars*/
/*global mars_moon_deimos*/
/*global mars_moon_phobos*/
/*global mercury*/
/*global neptune*/
/*global neptune_moon_triton*/
/*global pluto*/
/*global pluto_moon_charon*/
/*global pluto_moon_nix*/
/*global saturn*/
/*global saturn_moon_dione*/
/*global saturn_moon_enceladus*/
/*global saturn_moon_hyperion*/
/*global saturn_moon_iapetus*/
/*global saturn_moon_mimas*/
/*global saturn_moon_rhea*/
/*global saturn_moon_tethys*/
/*global saturn_moon_titan*/
/*global uranus*/
/*global uranus_moon_ariel*/
/*global uranus_moon_miranda*/
/*global uranus_moon_oberon*/
/*global uranus_moon_titania*/
/*global uranus_moon_umbriel*/
/*global venus*/


