var samples = { 65: ['kick', '#333333'],
                83: ['clap', '#666666'],
                68: ['hat',  '#999999'],
                pressed: '#9900ff' }

function playSample(key) {
  // 'clone()' is a shitty workaround to minimize delays between each play
  $('#' + samples[key][0]).clone()[0].play();
  $('.' + samples[key][0]).css('background-color', samples['pressed']);
};

function resetColor(key) {
  $('.' + samples[key][0]).css({'background-color': samples[key][1], 'transition':'background-color 0.2s ease' });
};

$(document).keydown(function(event) {
  code = event.which;
  playSample(code);
});

$(document).keyup(function(event) {
  code = event.which;
  resetColor(code);
});
