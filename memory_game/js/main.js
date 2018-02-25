
//create game logic
var cardsArray = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{	
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

var cardsInPlay = []; //create an empty array to hold cards in play.

// create checkformatch function

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay.length<2) {
	alert("Flip one more card");
}
else {
	alert("Sorry, try again.");
}
}

// create flipcard function

var cardID;

var flipCard = function(cardID) {
	console.log("User flipped " + cardsArray[cardID].rank);
	console.log(cardsArray[cardID].cardImage);
 	console.log(cardsArray[cardID].suit);
	cardsInPlay.push(cardsArray[cardID].rank);
	checkForMatch();
}


flipCard(0);
flipCard(1);
