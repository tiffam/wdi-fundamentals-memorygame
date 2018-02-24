console.log("Up and running!");

console.log("User flipped " + cardOne);

//create game logic

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; //create an empty array to hold cards in play.
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2 &&
	cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}


