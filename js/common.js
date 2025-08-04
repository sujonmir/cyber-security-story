addEventListener("DOMContentLoaded", function () {
  // play music on page load
  const music = document.getElementById("bgMusic");
  music.loop = true;
  music.volume = 0.1;

  // Try autoplay immediately
  music.play().catch(() => {
    // If autoplay fails, wait for user click
    const playMusicOnce = () => {
      music.play();
    };
    document.addEventListener("click", playMusicOnce, { once: true });
  });
  // call name from localStorage
  const name = localStorage.getItem("name");
  const showName = document.querySelector("#showName");
  if (name) {
    showName.innerHTML = name;
  } else {
    showName.innerHTML = "Alex Carter";
  }
});

function clicksound() {
  const soundFilePath = "../sound/click.mp3";
  const clickSound = new Audio(soundFilePath);

  document.addEventListener("click", function (event) {
    const linkElement = event.target.closest("a");

    if (linkElement) {
      event.preventDefault(); // <-- Prevent immediate navigation

      clickSound.currentTime = 0;
      clickSound
        .play()
        .then(() => {
          console.log("Sound playing...");
        })
        .catch((error) => {
          console.error("Audio play failed:", error);
        });

      // Delay navigation for 1 second
      setTimeout(() => {
        window.location.href = linkElement.href;
      }, 500); // 1000ms = 1 second
    }
  });
}

clicksound();
