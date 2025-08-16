const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const divEle = document.createElement("div");
  divEle.style.left = xPos + "px";
  divEle.style.top = yPos + "px";
  const size = Math.random() * 100;
  divEle.style.width = size + "px";
  divEle.style.height = size + "px";
  bodyElement.appendChild(divEle);
  setTimeout(() => {
    divEle.remove();
  }, 2500);
});
