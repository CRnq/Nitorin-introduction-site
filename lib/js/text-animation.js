const header = document.querySelector("#header");
const preloadBlock = document.querySelector(".typing-animate--preload");
const mainBlock = document.querySelector(".typing-animate--main");
const loadCode = document.querySelectorAll(".typing-animate--preload p");
const textCode = document.querySelectorAll(".typing-animate--main p");
const introText = document.querySelector(".self-intro");
const goAboutButton = document.querySelector(".about-link");

const nitorinSvg = document.querySelector(".nitorin-img-box");

header.classList.add("dark-mode");
preloadBlock.classList.add("invisible");
mainBlock.classList.add("invisible");
nitorinSvg.classList.add("invisible");
introText.classList.add("invisible");
goAboutButton.classList.add("invisible");

async function typingAnimate(element, text, speed = 20) {
  element.textContent = "";
  element.classList.add("animate-now");

  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await new Promise((r) => setTimeout(r, speed));
  }
  element.classList.remove("animate-now");
}

async function divideBlock(block, speed = 50) {
  const paragraphs = [];

  for (const line of block) {
    paragraphs.push(line.textContent);
    line.textContent = "";
  }

  for (let i = 0; i < paragraphs.length; i++) {
    await typingAnimate(block[i], paragraphs[i]);

    // textCodeの7行目実行でライトモードに変化
    if (block === textCode && i === 6) {
    }

    await new Promise((r) => setTimeout(r, speed));
  }
}

async function main() {
  console.time("darkmode");
  mainBlock.classList.remove("invisible");
  await divideBlock(textCode);
  await new Promise((r) => setTimeout(r, 500));
  preloadBlock.classList.remove("invisible");
  await divideBlock(loadCode);
  await new Promise((r) => setTimeout(r, 1000));
  header.classList.remove("dark-mode");
  console.timeEnd("darkmode");
  header.classList.add("light-mode");
  await new Promise((r) => setTimeout(r, 200));
  nitorinSvg.classList.remove("invisible");
  await new Promise((r) => setTimeout(r, 1000));
  introText.classList.remove("invisible");
  await new Promise((r) => setTimeout(r, 1000));
  goAboutButton.classList.remove("invisible");
}

main();
