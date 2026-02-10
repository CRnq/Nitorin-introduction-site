import { animate, svg } from "https://esm.sh/animejs";

animate(svg.createDrawable("path"), {
  draw: ["0 0", "0 1", "1 1"],
  ease: "inOut(3)",
  duration: 5000,
  loop: true,
});

