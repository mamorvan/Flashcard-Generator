var inquirer = require("inquirer");

var CardSetCreator = require("./CreateCardSet.js");

//create askBasicFlashcards function

var basicIndexCount = 0;
//pass wanted card set if more than one was created
var askBasicFlashcards = function(cardSet) {

	if (basicIndexCount < cardSet.length) {
		console.log("\n************NEW FLASHCARD*************");
		inquirer.prompt([
			{
				name: "front",
				message: "NAME THE SONG:" + cardSet[basicIndexCount].front	
			}

		]).then(function(answer) {
			if (answer.front === cardSet[basicIndexCount].back) {
				console.log("Excellent! You're right! These are really hard flashcards!");

			}
			else {
				console.log("Sorry, that's not right. The correct answer is: " + cardSet[basicIndexCount].back);
			}

			basicIndexCount++;
			askBasicFlashcards(cardSet);
		});		
		
	}// end of if going through card set array
	else {
		console.log("You're done!");
	}	
	
};//end of askBasicFlashcards function

//create askClozeFlashcards function
var clozeIndexCount = 0;
//pass wanted card set if more than one was created
var askClozeFlashcards = function(cardSet) {
	
	if (clozeIndexCount < cardSet.length) {
		console.log("\n************NEW CLOZE FLASHCARD*************");
		inquirer.prompt([
			{
			name: "partialText",
			message: "FINISH THE LYRICS:" + cardSet[clozeIndexCount].partialText	
			}

		]).then(function(answer) {
			if (answer.partialText === cardSet[clozeIndexCount].cloze) {
				console.log("Excellent! You're right! These are really hard flashcards!");

			}
			else {
				console.log("Sorry, that's not right. The correct answer is: " + cardSet[clozeIndexCount].fullText);
			}

			clozeIndexCount++;
			askClozeFlashcards(cardSet);
		});		
		
	}// end of if going through card set array
	else {
		console.log("You're done!");
	}		
};//end of askClozeFlashcards function

//--------------------- ask user for type of flashcard, topic the create card sets and run function needed ----------------------------//
inquirer.prompt([
	{
	name: "topic",
	message: "Which artist do you want to practice?",
	type: "list",
	choices: ["The Smiths", "Leonard Cohen", "I want to make my own set!"]
	}
	
]).then(function(topic) {
	//-----------if user chooses Smiths
	if (topic.topic === "The Smiths") {
		inquirer.prompt([
			{
			name: "type",
			message: "Which type do you want to study?",
			type: "list",
			choices: ["basic", "cloze"]
			}
			]).then(function(type) {

				if(type.type === "basic") {
					//add cards to basicSmithSongs set
					var basicSmithSongs = new CardSetCreator("basic");

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
					//and run the ask function to display cards
					askBasicFlashcards(basicSmithSongs.cardSet);
				}  //else type is not basic therefore cloze
				else {
					//add cards to clozeSmithSongs set
					var clozeSmithSongs = new CardSetCreator("cloze");

					clozeSmithSongs.addClozeCard(
						"\nFifteen minutes with you,\nWell I wouldn't say no\n", 
						"say no");
					clozeSmithSongs.addClozeCard(
						"\nIf a double-decker bus crashes into us,\nTo die by your side is such a heavenly way to die\n", 
						"such a heavenly way to die");
					clozeSmithSongs.addClozeCard(
						"\nShoplifters of the World,\nUnite and take over\n", 
						"and take over");
					clozeSmithSongs.addClozeCard(
						"\nThere's too much caffeine in your bloodstream,\nAnd a lack of real spice in your life\n", 
						"of real spice in your life");
					clozeSmithSongs.addClozeCard(
						"\nHow can someone so young,\nSing words so sad?\n", 
						"words so sad");
					//run the ask function to display cards
					askClozeFlashcards(clozeSmithSongs.cardSet);
				} 
			})//end of .then type
	}//end of if topic is Smiths

	//-----------if user chooses Leonard Cohen
	else if (topic.topic === "Leonard Cohen") {
		inquirer.prompt([
			{
			name: "type",
			message: "Which type do you want to study?",
			type: "list",
			choices: ["basic", "cloze"]
			}
		]).then(function(type) {
			if(type.type === "basic") {

				//add cards to basicLeonardCohen set
				var basicLeonardCohen = new CardSetCreator("basic");

				basicLeonardCohen.addBasicCard(
					"\nSo let me judge your love affair,\nIn this room where I have sentenced mine to death\n", 
					"Take This Longing");
				basicLeonardCohen.addBasicCard(
					"\nAnd you know that she's half-crazy but that's why you want to be there,\nAnd she feeds you tea and oranges that come all the way from China\n", 
					"Suzanne");
				basicLeonardCohen.addBasicCard(
					"\nWhat can I possibly say?,\nI guess that I miss you,\nI guess I forgive you\nI'm glad that you stood in my way\n", 
					"Famous Blue Raincoat");
				basicLeonardCohen.addBasicCard(
					"\nYou say you've gone away from me\nBut I can feel you when you breathe\n", 
					"Avalanche");
				basicLeonardCohen.addBasicCard(
					"\nWe met when we were almost young\nDeep in the green lilac parc\n", 
					"So Long, Marianne");
				//run ask function to display cards
				askBasicFlashcards(basicLeonardCohen.cardSet);
			}
			else { //else type is not basic therefore cloze
				//add cards to clozeLeonardCohen set
				var clozeLeonardCohen = new CardSetCreator("cloze");

				clozeLeonardCohen.addClozeCard(
					"\nRing the bells that still can ring,\nForget your perfect offering\nThere is a crack in everything\nThat's how the light gets in\n", 
					"the light gets in");
				clozeLeonardCohen.addClozeCard(
					"\nEverybody knows the fight was fixed,\nThe poor stay poor, the rich get rich,\nThat's how it goes,\nEverybody knows\n", 
					"Everybody knows");
				clozeLeonardCohen.addClozeCard(
					"\nLove is not a victory march,\nIt's a cold and it's a broken hallelujah\n", 
					"broken hallelujah");
				clozeLeonardCohen.addClozeCard(
					"\nYou fixed yourself,\nYou said 'Well, nevermind,\nWe are ugly but we have the music\n", 
					"we have the music");
				clozeLeonardCohen.addClozeCard(
					"\nDance me through the curtains that our kisses have outworn,\nRaise a tent of shelter now, though everything is torn\nDance me to the end of love\n", 
					"the end of love");
				//run ask function to display cards
				askClozeFlashcards(clozeLeonardCohen.cardSet);
			}
		})//end of .then type
	}//end of if topic is leonard cohen

	//-----------if user chooses to make custom card set
	else if (topic.topic === "I want to make my own set!") {
		//get card set name and type
		inquirer.prompt([
			{
			name: "cardSetName",
			message: "Name your flashcard set"
			},
			{
			name: "type",
			message: "Which type do you want to make?",
			type: "list",
			choices: ["basic", "cloze"]
			}
		]).then(function(custom) { 
			if(custom.type === "basic") {
				custom.cardSetName = new CardSetCreator("basic");
				var createCustomCardSet = function() { 
					//get card content
					inquirer.prompt([
						{
						name: "front",
						message: "What do you want on the front of your card?"
						},
						{
						name: "back",
						message: "What do you want on the back of your card?"
						}
					]).then(function(customContent) {
						//add card to custom set
						custom.cardSetName.addBasicCard(customContent.front, customContent.back);
						//add cards until user confirms he/she is done
						inquirer.prompt([
							{
							name: "done",
							message: "Are you finished adding cards?",
							type: "confirm"
							}
						]).then(function(done){
							if (done.done) {
								//if done creating cards, run ask function to display set
								askBasicFlashcards(custom.cardSetName.cardSet);
							}
							else {
								//keep creating cards and adding to custom set
								createCustomCardSet();
							}
						});//end of .then done confirm
					});//end of .then custom basic cards
				}//end of createCustomCardSet function
				//call first create function to start of
				createCustomCardSet();
			} 
			else {
				custom.cardSetName = new CardSetCreator("cloze");
				var createCustomCardSet = function() { 
					//get card content
					inquirer.prompt([
						{
						name: "full",
						message: "What is your full text?"
						},
						{
						name: "cloze",
						message: "Which part do you want you want to take out?"
						}
					]).then(function(customContent) {
						//add card to custom set
						custom.cardSetName.addClozeCard(customContent.full, customContent.cloze);
						//add cards until user confirms he/she is done
						inquirer.prompt([
							{
							name: "done",
							message: "Are you finished adding cards?",
							type: "confirm"
							}
						]).then(function(done){
							if (done.done) {
								askClozeFlashcards(custom.cardSetName.cardSet);
							}
							else {
								createCustomCardSet();
							}
						});//end of .then done or not
					});//end of .then add custom basic cards
				};//end of createCustomCardSet function
				//call first create function to start of
				createCustomCardSet();
			}//end of else type is not basic
		}); //end of .then name set and choose type	
	} //end if i want to make my own set

}); //end of first inquirer prompt - finally!
