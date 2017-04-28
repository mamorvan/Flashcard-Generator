var BasicFlashcard = function(front, back) {
	//make scope-safe constructor so user can call with or without new keyword
	if ( !(this instanceof BasicFlashcard)) {
		return new BasicFlashcard(front, back);
	}
	this.front = front;
	this.back = back;
}

//add printFront method to prototype
BasicFlashcard.prototype.printFront = function() {
	console.log(this.front);
}
//add printBack method to prototype
BasicFlashcard.prototype.printBack = function() {
	console.log(this.back);
}

module.exports = BasicFlashcard;