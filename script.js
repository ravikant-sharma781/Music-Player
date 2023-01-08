const music = document.querySelector("audio");
const img = document.getElementById("img");
const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

const artist = document.getElementById("artist");
const title = document.getElementById("title");

const songs = [
  {
    name: "s1",
    title: "Excuses",
    artist: "Ap Dhillon",
  },
  {
    name: "s2",
    title: "Good Days",
    artist: "Youg Lagos",
  },
  {
    name: "s3",
    title: "North Oakland Extasy",
    artist: "Squadda",
  },
  {
    name: "s4",
    title: "URL Melt",
    artist: "Unicorn Heads",
  },
  {
    name: "s5",
    title: "Wolf Moon",
    artist: "Unicorn Heads",
  },
];

const i = ["img-1", "img-2", "img-3", "img-4", "img-5"];

let isPlaying = false;
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-circle-play", "fa-circle-pause");
  img.classList.add("anime");
};

const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-circle-pause", "fa-circle-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  if (!isPlaying) {
    playMusic();
  } else {
    pauseMusic();
  }
});

// Changing the music data

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.title + ".mp3";
  img.src = "images/" + i[0] + ".jpg";
};

loadSong(songs[0]);

let songIndex = 0;
const loadNext = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  music.play();
  play.classList.replace("fa-circle-play", "fa-circle-pause");
  img.src = "images/" + i[songIndex] + ".jpg";
};

let loadPrevious = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  music.play();
  play.classList.replace("fa-circle-play", "fa-circle-pause");
  img.src = "images/" + i[songIndex] + ".jpg";
};

next.addEventListener("click", loadNext);
previous.addEventListener("click", loadPrevious);
