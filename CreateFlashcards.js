var BasicFlashcard = require("./BasicCard.js");

//constructor for creating cards based on type
var CardCreator = function(type) {
	//make scope-safe constructor
	if (!(this instanceof CardCreator)) {
		return new CardCreator(type);
	}
	//add this method to prototype? not sure how with if statement
	//add function to prototype and then call here - but then both cards have access to unneeded functions
	//recommended - make a stand-alone function and reference that - no prototype
	if (type === "basic") {
		this.basicCardSet = [];
		this.addBasicCard = function(front, back) {
			//trying out scope-safe with no new keyword
			this.basicCardSet.push(BasicFlashcard(front, back));
		};
		
	} //end of if basic card

	else { //only give choice of basic or cloze in terminal
		// put code for creating cloze cards here	
	} //end of else is a cloze card
}

module.exports = CardCreator;