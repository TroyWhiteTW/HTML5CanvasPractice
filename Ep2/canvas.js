let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

// 矩形
ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = 'rgba(0,255,0,0.5)';
ctx.fillRect(400, 100, 100, 100);
ctx.fillStyle = 'rgba(0,0,255,0.5)';
ctx.fillRect(300, 300, 100, 100);

console.log(canvas);

// 線
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = '#fa34a3';
ctx.stroke();

// 圓形
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

for (let i = 0; i < 3; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}