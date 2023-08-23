const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", (e) => {
  dinoJump();
});

function dinoJump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 600);
}

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 35 && cactusLeft > 0 && dinoTop >= 190) {
    if (confirm(`GAME OVER, MAN! GAME OVER! Go again?`)) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  }
}, 100);
