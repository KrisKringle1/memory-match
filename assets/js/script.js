$(document).ready(initializeApp)

var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;

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
    var firstImage = firstCardClicked.find('.cardFront').css('background-image');
    var secondImage = secondCardClicked.find('.cardFront').css('background-image');
    if (firstImage === secondImage) {
      console.log('its a match!')
      matches++
    } else {

      console.log('keep trying!')
    }


  }


}
