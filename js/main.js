$(function() {
  $('.nav_button').on('click', function(e) {    $('.nav_list').toggleClass('nav_list-active');
  });
});

$(".share").append("<p>Tag us in your vacation photos on insta!</p>");
$(document).ready(function(){
    $(".share").mouseover(function(){
        $(".share").css("font-style", "italic");
    });
    $(".share").mouseout(function(){
        $(".share").css("background-color", "skyblue");
    });
});

var welcome;
var message;
welcome = "<h5>Welcome to the What is That? Vacation App Website!</h5>";
message = "<p>We're excited that you want to get to know the world around you. Don't be afraid to drop us a note with questions or feedback.</p>";
var elWelcome = document.getElementById('welcome');
elWelcome.innerHTML = welcome;
var elMessage = document.getElementById('message');
elMessage.innerHTML = message;

$(function(){
  $('.input').keyup(function() {
    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    if (empty) {
      $('#send').attr('disabled', 'disabled').hasClass('.button-disabled').removeClass('button-primary');
    } else {
      $('#send').removeAttr('disabled').addClass('button-primary').removeClass('button-disabled');
    }
  });
})()

  $(document).ready(function() {
      $('.tooltip').tooltipster();
  });
  $('body').flowtype();
