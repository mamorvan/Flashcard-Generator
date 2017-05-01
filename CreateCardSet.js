
var BasicFlashcard = require("./BasicCard.js");
var ClozeFlashcard = require("./ClozeCard.js");

//constructor for creating card sets based on type
var CardSetCreator = function(type) {
	//make scope-safe constructor
	if (!(this instanceof CardSetCreator)) {
		return new CardSetCreator(type);
	}
	this.cardSet = [];
	//add this method to prototype? not sure how with if statement
	//add function to prototype and then call here - but then both cards have access to unneeded functions
	//recommended by Ryo - make a stand-alone function and reference that - 
	//don't add methods on prototype that can be accessed by objects that don't need them- room for error
	//not working but keep trying to figure out
	if (type === "basic") {		
		this.addBasicCard = function(front, back) {
			//trying out scope-safe with no new keyword
			this.cardSet.push(BasicFlashcard(front, back));
		};
	} //end of if basic card

	else { //only give choice of basic or cloze in terminal
		this.addClozeCard = function(text, cloze) {
			//trying out scope-safe with no new keyword
			this.cardSet.push(ClozeFlashcard(text, cloze));
};	
	} //end of else is a cloze card
}//end of CardSetCreator constructor

module.exports = CardSetCreator;
