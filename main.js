$(document).ready(function(){
window.onload = function(){

    
//Canvas stuff
var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();  
    
var cellWidth = 10;
var direction="R";

    
var snakeArray = [
    //pieces that make up snake
    {x:0,y:0},
    {x:10,y:0},
    {x:20,y:0},
    {x:30,y:0},
];
    
function init(){
    makeSnake();
}
    init();
    
function makeSnake(){
    for(i=0; i<snakeArray.length; i++) {
        ctx.fillStyle="blue";
        ctx.fillRect(snakeArray[i].x,snakeArray[i].y, cellWidth, cellWidth);
        ctx.stroke();
    }
}
    

function moveSnake (){
    ctx.clearRect(0,0,500,500);
    snakeArray.shift();
      
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//doc ready and window brakcets    
}
})