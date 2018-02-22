function draw() {
  var canvas;
  canvas = document.getElementById('js-canvas');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.fillStyle = 'rgb(' + Math.floor(1 + 40 * i) + ', ' +
          Math.floor(0 + 20 * j) + ', 0)';

        ctx.fillRect(j * 50, i * 50, 50, 50);
      }
    }
  }
}
