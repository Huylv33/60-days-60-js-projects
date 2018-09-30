var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth; 
var ty = window.innerHeight;
console.log("huy: " + tx + " " + ty);
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function () {
  mousex = event.clientX;
  mousey = event.clientY;
});

function randomColor() {
  var r = Math.floor((Math.random() * 255) + 1);
  var g = Math.floor((Math.random() * 255) + 1);
  var b = Math.floor((Math.random() * 255) + 1);
  var a = Math.random() * 1 + 0.5;
  return "rgba(" + r + "," + g + "," + b  + "," + a + ")";
}
var startRadius = 20;
function Ball() {
  this.color = randomColor();
  this.radius = 20;
  this.x = Math.floor((Math.random() * (tx - this.radius)) + this.radius);
  this.y = Math.floor((Math.random() * (ty - this.radius)) + this.radius);
  this.vx = 2;
  this.vy = 5;
  this.update = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius , 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
  }
}

var bal = [];
for (var i = 0; i < 50; i++) {
  bal.push(new Ball());
}

function animate() {
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;   
    canvas.width = tx;
    canvas.height = ty;
  };
  requestAnimationFrame(animate);
  c.clearRect(0,0,tx,ty);
  for (var i = 0; i < 50; i++) {
    bal[i].update();
    bal[i].x += bal[i].vx;
    bal[i].y += bal[i].vy;
    if (bal[i].y + bal[i].vy > canvas.height || bal[i].y + bal[i].vy < 0) {
      bal[i].vy = -bal[i].vy;
    }
    if (bal[i].x + bal[i].vx > canvas.width || bal[i].x + bal[i].vx < 0) {
      bal[i].vx = -bal[i].vx;
    }
    if (bal[i].x - bal[i].radius <= mousex && bal[i].x + bal[i].radius >= mousex 
      && bal[i].y - bal[i].radius <= mousey && bal[i].y + bal[i].radius >= mousey
      && bal[i].radius <= 50 
    ) {
      bal[i].radius += 5;
    }
    else if (bal[i].radius >= startRadius + 5){
      bal[i].radius -=1;
    }
  }
}
animate();
setInterval(function () {
  bal.push(new Ball());
  bal.splice(0, 1);
}, 400);  
