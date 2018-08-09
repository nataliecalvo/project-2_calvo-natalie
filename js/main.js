$(function() {
  $('.nav_button').on('click', function(e) {    $('.nav_list').toggleClass('nav_list-active');
  });
});

var welcome;
var message;
welcome = "<h5>Welcome to the What is That? Vacation App Website!</h5>";
message = "<p>If you've got questions, concerns or feedback about our app we're always happy to hear it! We typically respond to messages within 48 hours!</p>";
var elWelcome = document.getElementById('welcome');
elWelcome.innerHTML = welcome;
var elMessage = document.getElementById('message');
elMessage.innerHTML = message;

$(function(){
  $('.form_text input').keyup(function() {
    var empty = false;
    $('.form_text input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    if (empty) {
      $('#send').attr('disabled', 'disabled');
    } else {
      $('#send').removeAttr('disabled').removeClass('button-disabled').addClass('button-primary');
    }
  });
})
