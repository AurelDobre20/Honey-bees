window.onload = ()=>{

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const btnEasy = document.getElementById("btn1");
const btnMedium = document.getElementById("btn2");
const btnHard = document.getElementById("btn3");

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
img.src='media/honeycomb.jpeg';
var imgBee = new Image();
imgBee.src='media/angryBee.png';
var imgCheck = new Image();
imgCheck.src='media/check.png';

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

let noBees = 1;
function setBees(){
    for(let i =0; i < noBees; i++){
        matrixTable[ranNoGenerator()][ranNoGenerator()] = true;
       
    }
    
}
const asyncAlert = (message) => {
    setTimeout(() => { alert(message); },0);        
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

let counter = 0;
let counterNoBees = 0;

function checkNoOfNoBees(){

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(matrixTable[i][j]===true){
                counter++;
            }
        }
        
    }
    return 16 - counter;
    
}

function checkNoOfWins(){
    let counter = 0;

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(matrixTable[i][j]===false){
                counter++;
            }
        }
    }
    return counter;
    
}

function resetGame(){
    matrixTable =
    [
        [null, null,null,null],
        [null, null,null,null],
        [null, null,null,null],
        [null, null,null,null]
    ]

    noBees = 1
    let counter = 0;
    let counterNoBees = 0;

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



let checkLosee = false;

counterNoBees = checkNoOfNoBees();

canvas.addEventListener('click', (e)=>{
    let squareX = parseInt(e.offsetX / 150);
    let squareY = parseInt(e.offsetY / 150);

    checkLosee = checkLose(squareX,squareY);// check if lose
    if(checkLosee){ 
        checkLosee = true; // if its a lose dont let the player click anymore
        setTimeout(resetGame, 1000);
        asyncAlert("You lost!");
        return;
    }

    if(matrixTable[squareX][squareY]===null){
        matrixTable[squareX][squareY]=false;
    }
  
    if(counterNoBees === checkNoOfWins() + 1){
        drawImageCheck(squareX, squareY);
        setTimeout(resetGame, 1000);
        asyncAlert("You won!");
        return;
    }
    
    console.log(squareX,squareY);
    drawImageCheck(squareX, squareY);
    drawTable();
    console.log(checkLose(squareX,squareY));

    
})

btnEasy.addEventListener('click', function(){
    noBees =1;
    setBees();
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            console.log(matrixTable[i][j]);
            console.log(i,j);
        }
    }
})
btnMedium.addEventListener('click', (e)=>{
    noBees =2;
    setBees();
})
btnHard.addEventListener('click', (e)=>{
    noBees =4;
    setBees();
})

drawTable();



}