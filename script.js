let audio = new Audio('tune.mp3');
audio.id = 'tone';
audio.volume = 0.7

let isPlaying = false;

function startTune() {
  audio.play()
  $('#tone').animate({
    volume: 0.9
  }, 1000);
}

function pauseTune() {
  $('#tone').animate({
    volume: 0.2
  }, 1000); 
  audio.pause()
}

function togglePlay() {
  (isPlaying = !isPlaying) ? startTune() : pauseTune();
}
