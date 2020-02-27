

var canvas = document.getElementById("mainScreen");
var con = canvas.getContext("2d");

var ironplate = loadImage("ironplate.png");
setGameSpeed(60);
setBackgroundColor("black");
resetTransform();
/*
drawSetFont("20px Tahoma");
drawSetHAlign("left");

drawSetColor("#FFFFFF");
drawLine(0,0,50,50);
drawCircle(150,150,30);
drawText(256,64,"Hello World!");
drawSetColor("yellow");
drawRectangle(640,480,660,540,false);
*/

var gameObjs;

function onGameUpdate() {
	setBackgroundColor("black");
}

window.onload = function() {
	drawSpriteExt(320,400,ironplate,0.5,0.5);
}
