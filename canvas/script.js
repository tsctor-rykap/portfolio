let canva = document.getElementById("canv");
let ctx = canva.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "#2fab1a"
ctx.arc(100,100, 100, 0, Math.PI/2);
ctx.lineTo(100,100);
ctx.closePath();
ctx.fillStyle = "pink"
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.moveTo(0,100);
ctx.lineTo(200,100);
ctx.stroke();