// =======about-like-worksのコンテンツ切り替え=======

const aboutButton = document.querySelector(".about-link");
const likeButton = document.querySelector(".like-link");
const worksButton = document.querySelector(".works-link");

const likeContents = document.querySelector(".like");
const worksContens = document.querySelector(".works");
const about = document.querySelector("#about");
const like = document.querySelector("#like");
const works = document.querySelector("#works");

aboutButton.addEventListener("click", () => {
  about.classList.remove("invisible");
  like.classList.add("invisible");
  likeContents.classList.add("invisible");
  works.classList.add("invisible");
  worksContens.classList.add("invisible");
});

likeButton.addEventListener("click", () => {
  about.classList.add("invisible");
  like.classList.remove("invisible");
  likeContents.classList.remove("invisible");
  works.classList.add("invisible");
  worksContens.classList.add("invisible");
});

worksButton.addEventListener("click", () => {
  about.classList.add("invisible");
  like.classList.add("invisible");
  likeContents.classList.add("invisible");
  works.classList.remove("invisible");
  worksContens.classList.remove("invisible");
});

// =======LIKEセクションのコンテンツ切り替え=======

const runningButton = document.querySelector(".running-btn");
const musicButton = document.querySelector(".music-btn");
const vjButton = document.querySelector(".vj-btn");

const running = document.querySelector(".running");
const music = document.querySelector(".music");
const vj = document.querySelector(".vj");

runningButton.addEventListener("click", () => {
  running.classList.remove("invisible");
  music.classList.add("invisible");
  vj.classList.add("invisible");
});

musicButton.addEventListener("click", () => {
  running.classList.add("invisible");
  music.classList.remove("invisible");
  vj.classList.add("invisible");
});

vjButton.addEventListener("click", () => {
  running.classList.add("invisible");
  music.classList.add("invisible");
  vj.classList.remove("invisible");
});

// =======WORKSセクションのコンテンツ切り替え=======

const flow3Button = document.querySelector(".flow-3-btn");
const flow6Button = document.querySelector(".flow-6-btn");

const flow3 = document.querySelector(".flow-3");
const flow6 = document.querySelector(".flow-6");

flow3Button.addEventListener("click", () => {
  flow3.classList.remove("invisible");
  flow6.classList.add("invisible");
});

flow6Button.addEventListener("click", () => {
  flow3.classList.add("invisible");
  flow6.classList.remove("invisible");
});
