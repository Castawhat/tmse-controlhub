// List of sounds — name & file URL
const sounds = [
  {
    name: "Drum Roll",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/drum_roll.mp3"
  },
  {
    name: "Theme Song",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/title_theme.mp3"
  },
    {
    name: "Attention",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/attention.mp3"
  },
  // Add more sounds like this:
  // { name: "Buzzer", file: "https://github.com/USERNAME/REPO/raw/refs/heads/main/buzzer.mp3" }
];

function playSound(file) {
  const audio = new Audio(file);
  audio.play();
}

function loadButtons() {
  const container = document.getElementById("soundboard");
  sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("task-button");
    btn.textContent = sound.name;
    btn.onclick = () => playSound(sound.file);
    container.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", loadButtons);
