var nav,page;


$(document).ready(function() {
var popMenu = document.getElementById('myModal');

// Menu Open
      $("#menu-icon").on("click", function() {
        $("#sd-bar").toggleClass("open");
        popMenu.style.display = "block";
});

window.onclick = function(event) {
      if (event.target == popMenu) {
          popMenu.style.display = "none";
      }
  }
// Menu Close
$("#cl-side").on("click", function() {
  $("#sd-bar").removeClass("open");
});

// Scrolling effects
scrollS(nav,page);


});

function scrollS(nav,page){
   $(nav).click(function(){
     var popMenu = document.getElementById('myModal');
          destination=$(page).offset().top;
          $('html, body').animate({scrollTop:destination},500);
          popMenu.style.display='none';

    });
}
