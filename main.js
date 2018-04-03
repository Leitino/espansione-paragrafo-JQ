var isExpanded =false
$('#button').click(function(){
  if (isExpanded) {
    $('.film_trama, .trama').fadeOut(2000)
    $('#button').html('+')
    isExpanded = false
  }
  else {
    $('.film_trama, .trama').show(2000);
    $('#button').html('-')
    isExpanded = true
  }
})
