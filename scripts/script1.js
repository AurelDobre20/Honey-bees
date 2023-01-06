// Get a reference to the canvas and its 2D rendering context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set the fill style for the body


function drawEnvironment(){
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(800, 500);
    ctx.stroke();

    //sky
    ctx.fillStyle = '#03c2f5';
    ctx.fillRect(0, 0, 800, 500);

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
}
drawEnvironment()

function drawEverythingExceptGround(){
     //sky
     ctx.fillStyle = '#03c2f5';
     ctx.fillRect(0, 0, 800, 500);
 
     //hive
     ctx.fillStyle = '#de751f';
     ctx.fillRect(680, 380, 100, 100);
 
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
}





var img = new Image();
var img1 = new Image();
img1.src = 'assests/bee.png';


const btnStart = document.getElementById('btnStart');

btnStart.addEventListener('click', function(){
    img.src = 'assests/bee.png';
});

img.onload = function() {
    update();
}
img1.onload = function() {
    ctx.drawImage(img1, 50, 400, 50, 50);
}

x =50;
y= 400;
x2=1;

z = 50;
  
function update() {
    
    ctx.drawImage(img, x, y, 50, 50);
    if(x<630){
        x += 1;
        ctx.drawImage(img, x, y, 50, 50);

        drawEnvironment()
        ctx.drawImage(img, x, y, 50, 50);
       
    }
  

    // ctx.fillStyle = '#03c2f5';
    // ctx.fillRect(x2, y, z, 50);
    
    //if(x2<630){
        if(x===630){
            ctx.clearRect(x, y, 50, 50);
            drawEverythingExceptGround()
            //x2+=48;
        }
        //x2 += 1;
    //}
    // request another frame
    requestAnimationFrame(update);
}

