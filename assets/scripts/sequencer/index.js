$(function() {
  var interval, sample;

  interval = 0;

  function calculateInterval() {
    var currentBpm = Number($('#bpm').val());
    interval = 1000 / (currentBpm / 60);

    console.log('BPM is ' + currentBpm);
    console.log('Interval is ' + interval + ' ms');
  }

  function playSequence() {
    var kickSwitches, clapSwitches, kickSample, clapSample;

    kickSwitches = $('.track.kick').find('.switch');
    clapSwitches = $('.track.clap').find('.switch');

    kickSample = $('#kick');
    clapSample = $('#clap');

    function playToogledSwitches(i) {
      if ($(kickSwitches[i]).hasClass('toogled')) {
        playSample(kickSample);
      }

      if ($(clapSwitches[i]).hasClass('toogled')) {
        playSample(clapSample);
      }

      i++;
      i = i == 8 ? 0 : i;

      setTimeout(function() { playToogledSwitches(i); }, interval)
    }

    playToogledSwitches(0);
  }

  calculateInterval();

  function playSample(sample) {
    sample.clone()[0].play();
  }

  $('.switch').on('click', function() {
    $(this).toggleClass('toogled');
  });

  $('#bpm').on('change', function() {
    calculateInterval();
  });

  $('#play').click(function() { playSequence(); });

  // $('#bpm').on('change', function() { calculateInterval(); });
});