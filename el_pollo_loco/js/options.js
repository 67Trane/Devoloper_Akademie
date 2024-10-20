canvas = document.getElementById("canvas");

function openFullscreen() {
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.webkitRequestFullscreen) {
    /* Safari */
    canvas.webkitRequestFullscreen();
  } else if (canvas.msRequestFullscreen) {
    /* IE11 */
    canvas.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

function muteAllSounds() {
  allSoundsMute = !allSoundsMute;
  allSounds.forEach((audio) => {
    audio.pause();
  });
}

function restartGame() {
  stopAllIntervals();
  startGame();
}

function unpauseCharacter() {
  if (gameIsPaused) {
    world.character.animate();
    world.character.applyGravity();
    world.character.pushIntervalIds();
  }
  gameIsPaused = false;
}
