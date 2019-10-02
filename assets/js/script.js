$(document).ready(initializeApp)

function initializeApp(){
  $('.cardContainer').on("click", handleCardClick)
}

function handleCardClick(event){
 var clickMe = $(event.currentTarget.lastElementChild)
 clickMe.toggleClass('hidden');

 console.log(clickMe);
}
