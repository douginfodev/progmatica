var context; 
var canvas;

//Attached Canvas Display
context = document.getElementById('mcanvas');
canvas  = context.getContext('2d');

const GRIDSPACINGX  = 80;
const GRIDSPACINGY  = GRIDSPACINGX;
const GRIDLINEWIDTH = 1.5;

const Grid = function (width,height,color) {
  this.x = 0,
  this.y = 0,
  this.width  = width,
  this.height = height,
  this.lineWidth = GRIDLINEWIDTH,
  this.color = color,
  this.render = function () {
      let x = 0;
      let y = 0;

      for (let gridLines = 1; gridLines <= 25; gridLines++) {
          canvas.strokeStyle = this.color;
          canvas.lineWidth = this.lineWidth;

          canvas.beginPath();
          canvas.moveTo(x, 0);
          canvas.lineTo(x, this.height);
          canvas.stroke();

          canvas.beginPath();
          canvas.moveTo(0, y);
          canvas.lineTo(this.width, y);
          canvas.stroke();

          y = y + GRIDSPACINGY;
          x = x + GRIDSPACINGX;
        };
    };
};
