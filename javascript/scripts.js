var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");


myCanvas.addEventListener('click', handleCanvasClick);


function handleCanvasClick(event){
    
    context.fillStyle = "#ff" + (Math.floor(Math.random() * 10001));
    
    context.fillRect(0,0,1200,1200);
    
    console.log(Math.floor(Math.random() * 10001));

}   