var playHangman = confirm("Do you want to play hangman to guess the fairy tale?")
	if (playHangman) {console.log("Press any key to take a guess and begin.")}
	else {(playHangman)}{console.log("Have a nice day.")};
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var mysteryWord = ["Beauty and the Beast", "Cinderella", "The Ginger Bread Man", "Goldilocks and the Three Bears", "The Little Mermaid", "The Little Red Hen", "Sleeping Beauty", "Stone Soup", "Three Billy Goats Gruff", "Three Little Pigs", "The Ugly Duckling"];
var picture = ["assets/images/beautyBeast.jpg", "assets/images/cinderella.jpg", "assets/images/gingerbread-man.png", "assets/images/goldilocks.jpg", "assets/images/littlemermaid.jpg", "assets/images/hen.jpg",  "assets/images/sleeping-beauty.jpg", "assets/images/stone-soup.jpg", "assets/images/goats.jpg",  "assets/images/Three_Little_Pigs.png", "assets/images/ugly.png"];
var wins = 0;
var lose = 0;
var chosenWord = randomWord [Math.floor(Math.random() * mysteryWord.length)];

document.getElementById("displayLetters").innerHTML = letters;

///generate and display random mystery word
var word = mysteryWord[Math.floor(Math.random() * mysteryWord.length)];
console.log(word);
document.getElementById("word").textContent = word;

function randomWord() {pickedWord = Math.floor(Math.random() * mysteryWord.length);
        chosenWord = mysteryWord[pickedWord]; 
        mysteryWord.splice(pickedWord, 1); 
        selectedWord = chosenWord.split("");
}
