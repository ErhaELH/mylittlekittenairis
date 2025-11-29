
  const audio = document.getElementById("musik");
  const btn = document.getElementById("playBtn");

  btn.onclick = () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸";
    } else {
      audio.pause();
      btn.textContent = "▶";
    }
  };