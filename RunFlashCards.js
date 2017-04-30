var inquirer = require("inquirer");

var CardSetCreator = require("./CreateCardSet.js");

//add cards to basicSmithSongs 
var basicSmithSongs = CardSetCreator("basic");

basicSmithSongs.addBasicCard(
	"\nFifteen minutes with you,\nWell I wouldn't say no\n", 
	"Reel Around the Fountain");
basicSmithSongs.addBasicCard(
	"\nSweetness, sweetness, I was only joking\n", 
	"Bigmouth Strikes Again");
basicSmithSongs.addBasicCard(
	"\nCall me morbid, call me pale,\nI spent six years on your trail\n", 
	"Half a Person");
basicSmithSongs.addBasicCard(
	"\nI am the son and the heir,\nof a shyness that is criminally vulgar\n", 
	"How Soon Is Now");
basicSmithSongs.addBasicCard(
	"\nNow eighteen years hard labor sounds fair enough\n", 
	"I Started Something I Couldn't Finish");
basicSmithSongs.addBasicCard(
	"\nUnruly girls,\nWho will not settle down,\nThey must be taken in hand\n", 
	"Barbarism Begins at Home");
basicSmithSongs.addBasicCard(
	"\nShoplifters of the World,\nUnite and take over\n", 
	"Shoplifters of the World Unite");
basicSmithSongs.addBasicCard(
	"\nIf a double-decker bus crashes into us,\nTo die by your side is such a heavenly way to die\n", 
	"There Is a Light That Never Goes Out");

var basicIndexCount = 0;
//pass wanted card set if more than one was created
var askBasicFlashcards = function(cardSet) {

	if (basicIndexCount < cardSet.length) {
		console.log("\n************NEW FLASHCARD*************");
		inquirer.prompt([
			{
				name: "front",
				message: "NAME THE SMITHS SONG:" + basicSmithSongs.basicCardSet[basicIndexCount].front	
			}

		]).then(function(answer) {
			if (answer.front === basicSmithSongs.basicCardSet[basicIndexCount].back) {
				console.log("Excellent! You're right! These are really hard flashcards!");

			}
			else {
				console.log("Sorry, that's not right. The correct answer is: " + basicSmithSongs.basicCardSet[basicIndexCount].back);
			}

			basicIndexCount++;
			askBasicFlashcards(cardSet);
		});		
		
	}// end of if going through card set array
	else {
		console.log("You're done!");
	}	
	
}//end of askBasicFlashcards function

//add cards to clozeSmithSongs 
var clozeSmithSongs = CardSetCreator("cloze");

clozeSmithSongs.addClozeCard(
	"\nFifteen minutes with you,\nWell I wouldn't say no\n", 
	"no");

clozeSmithSongs.addClozeCard(
	"\nFifteen minutes with you,\nWell I wouldn't say no\n", 
	"say no");



var clozeIndexCount = 0;
//pass wanted card set if more than one was created
var askClozeFlashcards = function(cardSet) {
	
	if (clozeIndexCount < cardSet.length) {
		console.log("\n************NEW CLOZE FLASHCARD*************");
		inquirer.prompt([
			{
			name: "partialText",
			message: "FINISH THE LYRICS:" + clozeSmithSongs.clozeCardSet[clozeIndexCount].partialText	
			}

		]).then(function(answer) {
			if (answer.partialText === clozeSmithSongs.clozeCardSet[clozeIndexCount].cloze) {
				console.log("Excellent! You're right! These are really hard flashcards!");

			}
			else {
				console.log("Sorry, that's not right. The correct answer is: " + clozeSmithSongs.clozeCardSet[clozeIndexCount].fullText);
			}

			clozeIndexCount++;
			askClozeFlashcards(cardSet);
		});		
		
	}// end of if going through card set array
	else {
		console.log("You're done!");
	}	
	
}//end of askBasicFlashcards function


inquirer.prompt([
	{
	name: "type",
	message: "Which type of flashcard would you like?",
	type: "list",
	choices: ["basic", "cloze"]	
	}
]).then(function(flashcardType) {
	if(flashcardType.type === "basic") {
		askBasicFlashcards(basicSmithSongs.basicCardSet);
	}
	else {
		askClozeFlashcards(clozeSmithSongs.clozeCardSet);
	}
});

