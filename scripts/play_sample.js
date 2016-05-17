$(document).keydown(function(event) {
  var key = event.which;
  if(key == 65) {
    $('#kick')[0].play();
    $('.kick').css('background-color', '#751aff')
  }
  else if(key == 83) {
    $('#clap')[0].play();
    $('.clap').css('background-color', '#751aff')
  }
  else if(key == 68) {
    $('#hat')[0].play();
    $('.hat').css('background-color', '#751aff')
  }
});

$(document).keyup(function(event) {
  var key = event.which;
  if(key == 65) {
    $('.kick').css('background-color', '#ff1a1a')
  }
  else if(key == 83) {
    $('.clap').css('background-color', '#ff4d4d')
  }
  else if(key == 68) {
    $('.hat').css('background-color', '#ff8080')
  }
});
