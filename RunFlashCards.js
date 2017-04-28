var inquirer = require("inquirer");

var CardCreator = require("./CreateFlashcards.js");

var basicSmithSongs = CardCreator("basic");

//add cards to basicSmithSongs 
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nFifteen minutes with you,\nWell I wouldn't say no\n", 
	"Reel Around the Fountain");
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nSweetness, sweetness, I was only joking\n", 
	"Bigmouth Strikes Again");
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nCall me morbid, call me pale,\nI spent six years on your trail\n", 
	"Half a Person");
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nI am the son and the heir,\nof a shyness that is criminally vulgar\n", 
	"How Soon Is Now");
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nNow eighteen years hard labor sounds fair enough\n", 
	"I Started Something I Couldn't Finish");
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nUnruly girls,\nWho will not settle down,\nThey must be taken in hand\n", 
	"Barbarism Begins at Home");
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nShoplifters of the World,\nUnite and take over\n", 
	"Shoplifters of the World Unite");
basicSmithSongs.addBasicCard(
	"NAME THE SMITHS SONG:\nIf a double-decker bus crashes into us,\nTo die by your side is such a heavenly way to die\n", 
	"There Is a Light That Never Goes Out");

var indexCount = 0;
//pass wanted card set if more than one was created
var askBasicFlashcards = function(cardSet) {
	
	if (indexCount < cardSet.length) {
		console.log("\n************NEW FLASHCARD*************");
		inquirer.prompt([
			{
				name: "front",
				message: basicSmithSongs.basicCardSet[indexCount].front	
			}

		]).then(function(answer) {
			if (answer.front === basicSmithSongs.basicCardSet[indexCount].back) {
				console.log("Excellent! You're right! These are really hard flashcards!");

			}
			else {
				console.log("Sorry, that's not right. The correct answer is: " + basicSmithSongs.basicCardSet[indexCount].back);
			}

			indexCount++;
			askBasicFlashcards(cardSet);
		});		
		
	}// end of while going through card set array
	else {
		console.log("You're done!");
	}	
	
}//end of askBasicFlashcards function

askBasicFlashcards(basicSmithSongs.basicCardSet);

