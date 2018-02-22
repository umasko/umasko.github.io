$(function() {
  interval = 0;

  function calculateInterval() {
    var currentBpm = Number($('#bpm').val());
    interval = 1000 / (currentBpm / 60);

    console.log('BPM is ' + currentBpm);
    console.log('Interval is ' + interval + ' ms');
  }

  function playTrack() {
    playSample();
    setTimeout(function() { playTrack(); }, interval);
  }

  function playSample() {
    $('#kick').clone()[0].play();
  }

  calculateInterval();
  playTrack();

  $('#bpm').on('change', function() { calculateInterval(); });
});