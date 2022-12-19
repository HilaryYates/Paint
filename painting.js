const colors = ["red", "green", "blue", "yellow", "orange"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  environment = canvas.getContext("2d");

  // window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  // });

  let isPainting = false;

  const startPaint = (event) => {
    isPainting = true;
    draw(event);
  };

  const endPaint = () => {
    isPainting = false;
    environment.beginPath();
  };

  const draw = (event) => {
    if (!isPainting) return;
    environment.lineWidth = 5;
    environment.lineCap = "round";

    // random color
    environment.strokeStyle = randomColor;

    //
    environment.lineTo(event.clientX, event.clientY);
    environment.stroke();
    environment.beginPath();
    environment.moveTo(event.clientX, event.clientY);
  };

  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", endPaint);
  canvas.addEventListener("mousemove", draw);
});
