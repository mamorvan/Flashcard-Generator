var ClozeFlashcard = function(text, cloze) {
	//make scope-safe constructor so user can call with or without new keyword
	if ( !(this instanceof ClozeFlashcard)) {
		return new ClozeFlashcard(text, cloze);
	}
	this.fullText = text;
	this.cloze = cloze;
	//if cloze appears more than once in full text, replace all instances - try with Everybody Knows lyrics
	var clozeAll = new RegExp(cloze, "g");
	this.partialText = text.replace(clozeAll, ". . . ");
}

//add printPartialText method to prototype to print question to user
ClozeFlashcard.prototype.printPartialText = function() {
	console.log(this.partialText);
};
//add printFullText method to prototype to print answer to user
ClozeFlashcard.prototype.printFullText = function() {
	console.log(this.fullText);
};

module.exports = ClozeFlashcard;