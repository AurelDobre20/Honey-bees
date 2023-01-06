window.onload = ()=>{

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let matrixTable =
[
    [null, null,null,null],
    [null, null,null,null],
    [null, null,null,null],
    [null, null,null,null]
]


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
img.src='assests/honeycomb.jpg';
var imgBee = new Image();
imgBee.src='assests/angryBee.jpg';
var imgCheck = new Image();
imgCheck.src='assests/check.png';

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
    drawTable();
}

function drawImageCheck(x, y){
    //ctx.fillStyle = 'yellow';
    //ctx.fillRect(x*150, y*150, 149, 149);
    ctx.drawImage(imgCheck, x*150, y*150, 149, 149);
}

function ranNoGenerator(){
    return Math.floor((Math.random() * (3 - 0 + 1)) + 0);
}

function setBees(){
    for(let i = 0; i < 4; i++){
        matrixTable[ranNoGenerator()][ranNoGenerator()] = true;
    }
    
}

function checkLose(x, y){
    //let lose = false;
    if(matrixTable[x][y]===true){
        for(let i = 0; i < 4; i++){
                 for(let j = 0; j < 4; j++){
                    if(matrixTable[i][j] === true){
                        ctx.drawImage(imgBee,i*150, j*150, 149, 149);
                    }
                }
            }
        return true;
    }
    
}

let checkLosee = false;

canvas.addEventListener('click', (e)=>{
    let squareX = parseInt(e.offsetX / 150);
    let squareY = parseInt(e.offsetY / 150);
    
    

    if(checkLosee){ 
        checkLosee = true; // if its a lose dont let the player click anymore
        return;
    }

    checkLosee = checkLose(squareX,squareY);// check if lose

    console.log(squareX,squareY);
    drawImageCheck(squareX, squareY);
    drawTable();
    console.log(checkLose(squareX,squareY));

    
})

setBees();
// for(let i = 0; i < 4; i++){
//     for(let j = 0; j < 4; j++){
//         console.log(matrixTable[i][j]);
//     }
// }
drawTable();

}