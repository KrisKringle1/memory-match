$(document).ready(initializeApp)

var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var firstImage = null;
var secondImage = null;
var max_matches = 2;

function initializeApp() {
  $('.cardContainer').on("click", handleCardClick)
}

function handleCardClick(event) {
  var clickMe = $(event.currentTarget.lastElementChild)
  clickMe.toggleClass('hidden');

  if (firstCardClicked === null) {
    firstCardClicked = $(event.currentTarget);
  } else {
    secondCardClicked = $(event.currentTarget);
    firstImage = firstCardClicked.find('.cardFront').css('background-image');
    secondImage = secondCardClicked.find('.cardFront').css('background-image');
    if (firstImage === secondImage) {
      console.log('its a match!')
      matches++
      firstImage = null;
      secondImage = null;
      firstCardClicked = null;
      secondCardClicked = null;
    } else {

      setTimeout(resetImages, 1500)
      console.log('keep trying!')

    }
    if (matches === max_matches) {
      alert('you win!');


    }

  }



}function resetImages(){
firstCardClicked.find('.cardBack').removeClass('hidden');
secondCardClicked.find('.cardBack').removeClass('hidden');
firstImage = null;
secondImage = null;
firstCardClicked = null;
secondCardClicked = null;

}
