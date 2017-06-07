/*My variables*/ 
var mysteryWord = ["beauty and the beast", "cinderella", "the ginger bread man", "goldilocks and the three bears", "The Little Mermaid", "The Little Red Hen", "Sleeping Beauty", "Stone Soup", "Three Billy Goats Gruff", "Three Little Pigs", "The Ugly Duckling"];
var picture = ["assets/images/beautyBeast.jpg", "assets/images/cinderella.jpg", "assets/images/gingerbread-man.png", "assets/images/goldilocks.jpg", "assets/images/littlemermaid.jpg", "assets/images/hen.jpg",  "assets/images/sleeping-beauty.jpg", "assets/images/stone-soup.jpg", "assets/images/goats.jpg",  "assets/images/Three_Little_Pigs.png", "assets/images/ugly.png"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 11;


function startGame() {

    numGuesses = 11;

    chosenWord = mysteryWord[Math.floor(Math.random() * mysteryWord.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    console.log(mysteryWord);
    blanksAndSuccesses = [];
    wrongGuesses = [];


    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    console.log(blanksAndSuccesses);


    document.getElementById("guessesLeft").innerHTML = numGuesses;


    document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" ");


    document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

    var letterInWord = false;


    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] == letter) {
            letterInWord = true;
        }
    }


    if (letterInWord) {


        for (var i = 0; i < numBlanks; i++) {


            if (chosenWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

function roundComplete() {


    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);


    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


    if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You win!");


        document.getElementById("winCounter").innerHTML = winCounter;
        startGame();
    } else if (numGuesses == 0) {
        lossCounter++;
        alert("You lose ");


        document.getElementById("lossCounter").innerHTML = lossCounter;
        startGame();
    }

}



startGame();


document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);
    roundComplete();
}
