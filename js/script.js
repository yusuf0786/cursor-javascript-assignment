const movingBox = document.querySelector(".moving-element");

document.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  movingBox.style.left = `${x}px`;
  movingBox.style.top = `${y}px`;
});