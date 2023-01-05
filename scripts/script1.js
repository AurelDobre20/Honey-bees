// Get a reference to the canvas and its 2D rendering context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set the fill style for the body


// Draw the right wing
ctx.beginPath();
ctx.moveTo(0, 500);
ctx.lineTo(800, 500);
ctx.stroke();

//hive
ctx.fillStyle = '#de751f';
ctx.fillRect(680, 380, 100, 100);

//ground
ctx.fillStyle = 'green';
ctx.fillRect(0, 500, 800, 100);

//leg 1
ctx.beginPath();
ctx.moveTo(680, 480);
ctx.lineTo(680, 500);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(690, 480);
ctx.lineTo(690, 500);
ctx.stroke();

ctx.fillStyle = 'black';
ctx.fillRect(680, 480, 10, 20);

//leg 2
ctx.beginPath();
ctx.moveTo(770, 480);
ctx.lineTo(770, 500);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(780, 480);
ctx.lineTo(780, 500);
ctx.stroke();

ctx.fillStyle = 'black';
ctx.fillRect(770, 480, 10, 20);


