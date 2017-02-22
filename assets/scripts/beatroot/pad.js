var samplesDiv = $('.samples');
var padsDiv    = $('.pads');

function Pad(name, text, _file, _color) {
  this.name  = name;
  this.text  = text;
  // this.file  = file;
  // this.color = color;

  var sample = document.createElement('AUDIO');

  sample.id      = name;
  sample.preload = 'auto';
  sample.src     = '../../assets/samples/' + name + '.mp3';

  samplesDiv.append(sample);

  var pad = document.createElement('div');

  pad.className   = 'sample' + ' ' + name;
  pad.textContent = text;

  padsDiv.append(pad)
};

new Pad('kick', 'Kick (A)');
new Pad('clap', 'Clap (S)');
new Pad('hat',  'Hat (D)');