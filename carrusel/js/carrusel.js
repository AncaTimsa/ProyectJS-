


$('.carosel-control-right').click(function() {
  $(this).blur();
  $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
  console.log("flecha derecha")
});
$('.carosel-control-left').click(function() {
  $(this).blur();
  $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
   console.log("flecha izquierda")
});



$('.bootom-rdio').click(function() {
  $(this).blur();
  console.log("entro aki")
  $(".slide").parent().find(".carosel-item").first().insertAfter($(this).parent().find('.carosel-item').last());
  console.log( this + " entro aki")
});
$('.bootom-rdio').click(function() {
  $(this).blur();
  $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
});