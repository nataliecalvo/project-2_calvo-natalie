var $modalTrigger = $('#modal_trigger'),
  $modal = $('.modal'),
  $modalClose = $('.modal_close'),
  $modalActive = 'modal-active';
$modalTrigger.on('click', function(e) {
    e.preventDefault();
    $(this).siblings($modal).addClass($modalActive);
    $modal.attr('aria-hidden', 'false');
});

$modalClose.on('click', function(e){
  e.preventDefault();
  $(this).parent($modal).removeClass($modalActive);
});

$(function(){
  $('.input').keyup(function() {
    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    if (empty) {
      $('#login').attr('disabled', 'disabled').hasClass('.button-disabled').removeClass('button-primary');
    } else {
      $('#login').removeAttr('disabled').addClass('button-primary').removeClass('button-disabled');
    }
  });
})()
