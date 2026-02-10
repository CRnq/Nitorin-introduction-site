const about = document.querySelector("#about");
const like = document.querySelector("#like");
const works = document.querySelector("#works");

const aboutButton = document.querySelector(".about-link");
const likeButton = document.querySelector(".like-link");
const worksButton = document.querySelector(".works-link");

aboutButton.addEventListener("click", () => {
  about.classList.remove("invisible");
  like.classList.add("invisible");
  works.classList.add("invisible");
});

likeButton.addEventListener("click", () => {
  about.classList.add("invisible");
  like.classList.remove("invisible");
  works.classList.add("invisible");
});

worksButton.addEventListener("click", () => {
  about.classList.add("invisible");
  like.classList.add("invisible");
  works.classList.remove("invisible");
});
