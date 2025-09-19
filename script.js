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
  {
    name: "Red Light",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/red.mp3"
  },
  {
    name: "Green Light",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/green.mp3"
  },
  {
    name: "Right",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/ding.mp3"
  },
  {
    name: "Wrong",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/wrong.mp3"
  },
  {
    name: "Discord",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/notif.mp3"
  },
  {
    name: "Dun Dun Dun",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/joshdun.mp3"
  },
  {
    name: "A Few Moments Later",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/afew.mp3"
  },
    {
    name: "Vine Boom",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/oom.mp3"
     },
    {
    name: "Record Scratch",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/what.mp3"
  },
      {
    name: "Transitional 1",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/tmtrans1.mp3"
  },
    {
    name: "Transitional 3",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/tmtrans3.mp3"
  },
    
    {
    name: "Transitional 4",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/tmtrans4.mp3"
  },
  {
    name: "Transitional 7",
    file: "https://github.com/Castawhat/taskmasterscouts-soundboard/raw/refs/heads/main/tmtrad7.mp3"
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
