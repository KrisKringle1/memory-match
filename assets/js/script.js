$(document).ready(initializeApp);
$(document).ready(checkDisplay)
function checkDisplay() {
	var ratio = $(window).height() / $(window).width();

	if (ratio > 0.803488) {
		$(".modal").css("display", "block");
	} else {
		$(".modal").css("display", "none");
	}

}
$(window).resize(checkDisplay);
//global variables
var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var firstImage = null;
var secondImage = null;
var max_matches = 9;
var attempts = 0;
var games_played = 0;
var accuracy = 0;
var gamesPlayedNumber = $(".gamesPlayed");
var attemptsMade = $(".attemptsMade");
var gameAccuracy = $(".gameAccuracy");

function playIntroMusic() {

	$(".introBox").addClass("hidden");
}

function initializeApp() {
	$(".cardContainer").on("click", handleCardClick);
}
generateCards();
//when clicking a card
function handleCardClick(event) {
	//makes the back card disappear
	var clickMe = $(event.currentTarget.lastElementChild);
	clickMe.toggleClass("hidden");
	//tracking values of each card
	if (firstCardClicked === null) {
		firstCardClicked = $(event.currentTarget);
		firstCardClicked.css("pointer-events", "none");
	} else {
		//secondCardClicked takes the value of the first card clicked
		secondCardClicked = $(event.currentTarget);
		secondCardClicked.css("pointer-events", "none");
		//jQuery selectors to check if the background images are the same, if they are they match.
		firstImage = firstCardClicked.find(".innerCard").css("background-image");
		secondImage = secondCardClicked.find(".innerCard").css("background-image");
		//attempts incrementor

		if (firstImage === secondImage) {
			//matches incrementor
			matches++;
			attempts++;
			firstImage = null;
			secondImage = null;
			firstCardClicked = null;
			secondCardClicked = null;
		} else {
			//reset images after 1.5 seconds
			$(".cardContainer").unbind("click");
			attempts++;
			setTimeout(function () {
				firstCardClicked.css("pointer-events", "");
				secondCardClicked.css("pointer-events", "");
				$(".cardContainer").on("click", handleCardClick);
				resetImages();
			}, 1500);

		}

		//alert to announce victory, needs to be changed to a div
		//games played incrementor
		if (matches === max_matches) {
			$(".alert").removeClass("hidden");
		}
		calculateAccuracy();
	}
	displayStats();
}
//function that resets images
function resetImages() {
	firstCardClicked.find(".outerCard").removeClass("hidden");
	secondCardClicked.find(".outerCard").removeClass("hidden");
	firstImage = null;
	secondImage = null;
	firstCardClicked = null;
	secondCardClicked = null;
}

function calculateAccuracy() {
	accuracy = (matches / attempts) * 100;


}

function displayStats() {
	gamesPlayedNumber.text(games_played);
	attemptsMade.text(attempts);
	gameAccuracy.text(accuracy.toFixed(2) + "%");
}

function resetStats() {
	matches = 0;
	attempts = 0;
	accuracy = 0;
	games_played++;
	displayStats();
	$("gameAccuracy").text(accuracy)

	$(".gamesPlayed").text(games_played);
	$(".alert").addClass("hidden");
	$(".outerCard").removeClass("hidden");
	$(".cardContainer").css("pointer-events", "auto");
	displayStats();
	$('.container').empty()

	generateCards();
	initializeApp();

}

function generateCards() {
	var cardAarray = [
		"card1",
		"card1",
		"card2",
		"card2",
		"card3",
		"card3",
		"card4",
		"card4",
		"card5",
		"card5",
		"card6",
		"card6",
		"card7",
		"card7",
		"card8",
		"card8",
		"card9",
		"card9"
	];

	while (cardAarray.length) {
		var randomNumber = Math.floor(Math.random() * cardAarray.length);
		var cardIndex = cardAarray.splice(randomNumber, 1);
		$(".container").append(
			$(
				`<div class="cardContainer"><div class="innerCard ${cardIndex}"></div><div class="outerCard">`
			)
		);
	}




}
