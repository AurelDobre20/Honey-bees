window.onload = ()=>{

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let matrixTable =[
    [null, null,null,null],
    [null, null,null,null],
    [null, null,null,null],
    [null, null,null,null]
];


const drawTable = () => {
    for (let i = 150; i <= 600; i+=150)
    {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(600, i);
        ctx.stroke();
    }
}

var img = new Image();
img.src='assests/honeycomb.jpg'

img.onload = function() {
    ctx.drawImage(img,0,  0, 148,148);
    ctx.drawImage(img,152,0, 146,148);
    ctx.drawImage(img,302,0, 146,148);
    ctx.drawImage(img,452,0, 146,148);

    ctx.drawImage(img,0,  151, 148,148);
    ctx.drawImage(img,152,151, 146,148);
    ctx.drawImage(img,302,151, 146,148);
    ctx.drawImage(img,452,151, 146,148);

    ctx.drawImage(img,0,  301, 148,148);
    ctx.drawImage(img,152,301, 146,148);
    ctx.drawImage(img,302,301, 146,148);
    ctx.drawImage(img,452,301, 146,148);

    ctx.drawImage(img,0,  451, 148,148);
    ctx.drawImage(img,152,451, 146,148);
    ctx.drawImage(img,302,451, 146,148);
    ctx.drawImage(img,452,451, 146,148);
}
function colorYellow(x, y){
    if(x===0){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*150, y*150, 148, 148);
    }
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x*150+2, y*150+1, 148, 148);
}

canvas.addEventListener('click', (e)=>{
    let squareX = parseInt(e.offsetX / 150);
    let squareY = parseInt(e.offsetY / 150);

    console.log(squareX,squareY);

   
    colorYellow(squareX, squareY);
})




drawTable();

}