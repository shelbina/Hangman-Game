var mysteryWord [
        "Beauty and the Beast",
        "Cinderella", 
        "The Ginger Bread Man", 
        "Goldilocks and the Three Bears", 
        "The Little Mermaid", 
        "The Little Red Hen", 
        "Sleeping Beauty",
        "Stone Soup",
        "Three Billy Goats Gruff", 
        "Three Little Pigs",
        "The Ugly Duckling"];


var picture = [ 
        "assets/images/beautyBeast.jpg",
        "assets/images/cinderella.jpg",
        "assets/images/gingerbread-man.png",
        "assets/images/goldilocks.jpg",
        "assets/images/littlemermaid.jpg",
        "assets/images/hen.jpg",
        "assets/images/sleeping-beauty.jpg",
        "assets/images/stone-soup.jpg",
        "assets/images/goats.jpg",
        "assets/images/Three_Little_Pigs.png",
        "assets/images/ugly.png"];


var win = 0; new Audio('assets/images/tinkle.mp3'); 
var lose = 0, new Audio('assets/images/evil.mp3');


var currentWord; 
var guesses = []; 
var selectedWord = [];
var guessesRemain = 8; 
var guess = ''; guesses;
var correctCount = 0;
var pickedWord = 0;
var alreadyGuessed = [];

