let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(400, 100, 100, 100);
ctx.fillRect(200, 300, 100, 100);

console.log(canvas);