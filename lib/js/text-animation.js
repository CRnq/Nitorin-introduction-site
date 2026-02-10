const header = document.querySelector("#header");
const preloadBlock = document.querySelector(".typing-animate--preload");
const mainBlock = document.querySelector(".typing-animate--main");
const loadCode = document.querySelectorAll(".typing-animate--preload p");
const textCode = document.querySelectorAll(".typing-animate--main p");
const introText = document.querySelector(".self-intro");
const scrollView = document.querySelector(".scroll");

const nitorinSvg = document.querySelector(".nitorin-img-box");

header.classList.add("dark-mode");
preloadBlock.classList.add("invisible");
mainBlock.classList.add("invisible");
nitorinSvg.classList.add("invisible");
introText.classList.add("invisible");
scrollView.classList.add("invisible");

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
      header.classList.remove("dark-mode");
      header.classList.add("light-mode");
    }

    await new Promise((r) => setTimeout(r, speed));
  }
}

async function main() {
  mainBlock.classList.remove("invisible");
  await divideBlock(textCode);
  await new Promise((r) => setTimeout(r, 500));
  preloadBlock.classList.remove("invisible");
  await divideBlock(loadCode);
  await new Promise((r) => setTimeout(r, 1000));
  nitorinSvg.classList.remove("invisible");
  introText.classList.remove("invisible");
  await new Promise((r) => setTimeout(r, 1000));
  scrollView.classList.remove("invisible");
}

main();
