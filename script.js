/* ---------- ESTRELLAS ---------- */
const starsContainer = document.getElementById("stars");
const starCount = 70;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 2 + "s";
  starsContainer.appendChild(star);
}

/* ---------- EFECTO MOUSE ---------- */
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  // Mover flores
  const flowers = document.querySelectorAll('.flower');
  flowers.forEach((flower) => {
    const offsetX = (mouseX - 0.5) * 15;
    const offsetY = (mouseY - 0.5) * 15;
    flower.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  // Mover estrellas
  const stars = document.querySelectorAll('.star');
  stars.forEach((star) => {
    const offsetX = (mouseX - 0.5) * 10;
    const offsetY = (mouseY - 0.5) * 10;
    star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

/* ---------- BOTÓN REGALO ---------- */
document.getElementById('gift-button').addEventListener('click', () => {
  const note = document.querySelector('.note');
  note.innerHTML = '<p style="font-size: 1.5rem; font-weight: bold; text-align: center;">Nah aun no esta tu regalo definitivo, tendras que esperar a q sepa q darte jeje</p>';
  document.getElementById('gift-button').style.display = 'none';
});
