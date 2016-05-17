var keys = { 65: 'kick', 83: 'clap', 68: 'hat' }

$(document).keydown(function(event) {
  var key = event.which;
  function playSample(k) {
    $('#' + keys[k]).clone()[0].play();
    $('.' + keys[k]).css('background-color', '#751aff');
  }
  playSample(key);
});

$(document).keyup(function(event) {
  var key = event.which;
  if(key == 65) {
    $('.kick').css('background-color', '#ff1a1a');
  }
  else if(key == 83) {
    $('.clap').css('background-color', '#ff4d4d');
  }
  else if(key == 68) {
    $('.hat').css('background-color', '#ff8080');
  }
});
