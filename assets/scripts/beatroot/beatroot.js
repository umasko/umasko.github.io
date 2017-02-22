function run() {
  var pads = [
    { name: 'kick', text: 'Kick (A)' },
    { name: 'clap', text: 'Clap (S)' },
    { name: 'hat',  text: 'Hat (D)' }
  ];

  pads.forEach(function(pad) {
    var instance = new Pad(pad.name, pad.text);

    instance.addSample();
    instance.render();
  });
};

run();