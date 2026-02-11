const yes = document.getElementById("yes");
const no = document.getElementById("no");
const buttons = document.getElementById("buttons");
const message = document.getElementById("message");
const title = document.getElementById("title");

// Botón NO huye
no.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

// Botón SÍ
yes.addEventListener("click", () => {
  buttons.style.display = "none";
  title.textContent = "¡YEEEH! 💕";
  message.classList.remove("hidden");
  createHearts();
});

// Corazones flotando
function createHearts() {
  const hearts = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }, 300);
}
