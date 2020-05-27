const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
// ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
// ctx.lineCap = "round";
ctx.lineWidth = 0;
let isDrawing = false;
let direction = false;
let startHue = 0;
let startx = 0;
let starty = 0;

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  startx = e.offsetX;
  starty = e.offsetY;
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function draw(e) {
  if (isDrawing) {
    ctx.beginPath();
    // ctx.strokeStyle = "hsl(" + Math.ceil(Math.random() * 360) + ", 80%, 50%)";
    ctx.strokeStyle = "hsl(" + startHue + ", 80%, 50%)";

    ctx.moveTo(startx, starty);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.closePath();
    [startx, starty] = [e.offsetX, e.offsetY];
    if (ctx.lineWidth >= 150 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    startHue >= 360 ? (startHue = 0) : startHue++;
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
  }
}
