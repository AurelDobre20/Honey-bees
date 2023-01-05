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

//lines on the hive
let counter = 0;
for(let i = 0 ;i <11;i++){
    ctx.beginPath();
    ctx.moveTo(680, 380 + counter);
    ctx.lineTo(780, 380 + counter);
    ctx.stroke();
    counter+=10;
}
//roof
ctx.fillStyle = 'black';
ctx.fillRect(670, 370, 120, 10);



var img = new Image();
img.src = 'assests/bee.png';

img.onload = function() {
    update();
}

x =50;
y= 400;
x2=1;
  
function update() {
  
       
   
    ctx.drawImage(img, x, y, 50, 50);
    if(x<630){
        x += 1;
    }
    ctx.clearRect(x2, y, 50, 50);
   
    if(x2<630){
        if(x===629){
            x2+=48;
        }
        x2 += 1;
    }
    // request another frame
    requestAnimationFrame(update);
    
}

  
  
