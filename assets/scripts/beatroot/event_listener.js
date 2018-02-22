var samples = { 65: ['kick', '#333333'],
                83: ['clap', '#666666'],
                68: ['hat',  '#999999'],
                pressed: '#9900ff' }

function playSample(key) {
  // 'clone()' is a shitty workaround to minimize delays between each play
  $('#' + samples[key][0]).clone()[0].play();
  $('.' + samples[key][0]).css('background-color', samples['pressed']);
}

function resetColor(key) {
  $('.' + samples[key][0]).css({
    'background-color': samples[key][1],
    'transition': 'background-color 0.2s ease'
  });
}

$('.kick')
  .mousedown(function() {
    playSample('65');
  })
  .mouseup(function() {
    resetColor('65');
  });

$('.clap')
  .mousedown(function() {
    playSample('83');
  })
  .mouseup(function() {
    resetColor('83');
  });

$('.hat')
  .mousedown(function() {
    playSample('68');
  })
  .mouseup(function() {
    resetColor('68');
  });

$(document).keydown(function(event) {
  code = event.which;
  playSample(code);
});

$(document).keyup(function(event) {
  code = event.which;
  resetColor(code);
});
