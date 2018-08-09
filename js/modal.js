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
  $('.modal_input').keyup(function() {
    var empty = false;
    $('.modal_input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    if (empty) {
      $('#login').attr('disabled', 'disabled');
    } else {
      $('#login').removeAttr('disabled').removeClass('button-disabled').addClass('button-primary');
    }
  });
})
