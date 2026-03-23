document.addEventListener("keydown", (event) => {
  y = 0;
  x = 0;
  step = 10;
  if (event.key === "ArrowDown") {
    y += step;
  } else if (event.key === "ArrowUp") {
  }
  document.getElementById("box").style.top = y + "px";
  document.getElementById("box").style.top = x + "px";
});
