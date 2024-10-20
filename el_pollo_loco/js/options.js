const fullscreenElement = document.getElementById("fullscreen");

function toggleFullscreen() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    // Vollbildmodus aktivieren
    if (fullscreenElement.requestFullscreen) {
      fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.webkitRequestFullscreen) {
      // Für Safari
      fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.msRequestFullscreen) {
      // Für IE11
      fullscreenElement.msRequestFullscreen();
    }
  } else {
    // Vollbildmodus verlassen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      // Für Safari
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // Für IE11
      document.msExitFullscreen();
    }
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
    world.level.enemies.forEach((enemie) => {
      enemie.initialize();
    });
  }
  gameIsPaused = false;
}
