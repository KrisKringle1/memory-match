$(document).ready(initializeApp)
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
var gamesPlayedNumber = $('.gamesPlayed');
var attemptsMade = $('.attemptsMade');
var gameAccuracy = $('.gameAccuracy');

function initializeApp() {
  $('.cardContainer').on("click", handleCardClick);
}
//when clicking a card
function handleCardClick(event) {
//makes the back card disappear
  var clickMe = $(event.currentTarget.lastElementChild)
  clickMe.toggleClass('hidden');
//tracking values of each card
  if (firstCardClicked === null) {
    firstCardClicked = $(event.currentTarget);
  } else {
//secondCardClicked takes the value of the first card clicked
    secondCardClicked = $(event.currentTarget);
//jQuery selectors to check if the background images are the same, if they are they match.
    firstImage = firstCardClicked.find('.innerCard').css('background-image');
    secondImage = secondCardClicked.find('.innerCard').css('background-image');
//attempts incrementor

    console.log(attempts);
    if (firstImage === secondImage) {
      console.log('its a match!')
//matches incrementor
      matches++
      attempts++;
      firstImage = null;
      secondImage = null;
      firstCardClicked = null;
      secondCardClicked = null;
    } else {
//reset images after 1.5 seconds
      $('.cardContainer').unbind("click");
      attempts++;
      setTimeout(function(){
        $('.cardContainer').on("click", handleCardClick);
        resetImages()

      }, 1500)
      console.log('keep trying!')


    }

//alert to announce victory, needs to be changed to a div
//games played incrementor
    if (matches === max_matches) {

      $('.alert').removeClass('hidden');

    }
    calculateAccuracy();
  }
  displayStats();



}
//function that resets images
function resetImages(){
firstCardClicked.find('.outerCard').removeClass('hidden');
secondCardClicked.find('.outerCard').removeClass('hidden');
firstImage = null;
secondImage = null;
firstCardClicked = null;
secondCardClicked = null;


}

function calculateAccuracy(){

  accuracy = matches / attempts * 100;

  console.log(accuracy);


}

function displayStats(){
  gamesPlayedNumber.text(games_played);
  attemptsMade.text(attempts);
  gameAccuracy.text(accuracy.toFixed(2) + "%");



}

function resetStats(){
  matches = 0;
  attempts = 0;
  games_played++;
  $('.alert').addClass('hidden');
  $('.outerCard').removeClass('hidden');
  displayStats();
}
