const movingBox = document.querySelector(".moving-element");

document.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const elementCurrentX = movingBox.offsetLeft + movingBox.offsetWidth / 2
  movingBox.style.left = `${x}px`;
  movingBox.style.top = `${y}px`;
  movingBox.style.transform = elementCurrentX <= x ? `scaleX(-1)` : ``;

  
});