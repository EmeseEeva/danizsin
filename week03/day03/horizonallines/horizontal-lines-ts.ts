
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawLine(x: number, y: number) {
  ctx.beginPath();
  ctx.strokeStyle = 'orange';
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 50);
  ctx.stroke();
}

for (let i: number = 0; i <= 2; i++) {
  drawLine(100 + i * 100, 100);
}