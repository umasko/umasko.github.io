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
    var kick1Switches, kick2Switches, clapSwitches, kick1Sample, kick2Sample, clapSample;

    kick1Switches = $('.sequencer__track.kick1').find('.sequencer__track-step');
    kick2Switches = $('.sequencer__track.kick2').find('.sequencer__track-step');
    clapSwitches = $('.sequencer__track.clap').find('.sequencer__track-step');

    kick1Sample = $('#kick1');
    kick2Sample = $('#kick2');
    clapSample = $('#clap');

    function playToogledSwitches(i) {
      if ($(kick1Switches[i]).hasClass('toogled')) {
        playSample(kick1Sample);
      }

      if ($(kick2Switches[i]).hasClass('toogled')) {
        playSample(kick2Sample);
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

  $('.sequencer__track-step').on('click', function() {
    $(this).toggleClass('toogled');
  });

  $('#bpm').on('change', function() {
    calculateInterval();
  });

  $('#play').click(function() { playSequence(); });

  // $('#bpm').on('change', function() { calculateInterval(); });
});