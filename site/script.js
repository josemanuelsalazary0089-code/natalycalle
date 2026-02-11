const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const successScreen = document.getElementById("successScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Cambiar pantalla al presionar tecla
document.addEventListener("keydown", () => {
  startScreen.classList.remove("active");
  questionScreen.classList.add("active");
});

// Botón SÍ
yesBtn.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  successScreen.classList.add("active");
  startHearts();
});

// Botón NO que huye
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Lluvia de corazones
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 300);
}
