
//create game logic

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; //create an empty array to hold cards in play.

// create checkformatch function

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

// create flipcard function

var flipCard = function(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
}



flipCard(0);
flipCard(2);
