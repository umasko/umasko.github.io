function Pad(name, text) {
  this.name  = name;
  this.text  = text;
};

Pad.prototype.addSample = function() {
  var sample = document.createElement('AUDIO');

  sample.id      = this.name;
  sample.preload = 'auto';
  sample.src     = '../../assets/samples/' + this.name + '.mp3';

  document.getElementsByClassName('samples')[0]
          .appendChild(sample);
};

Pad.prototype.render = function() {
  var pad = document.createElement('div');

  pad.className   = 'sample' + ' ' + this.name;
  pad.textContent = this.text;

  document.getElementsByClassName('pads')[0]
          .appendChild(pad);
};