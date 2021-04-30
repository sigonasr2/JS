

var canvas = document.getElementById("mainScreen");
var con = canvas.getContext("2d");

var ironplate = loadImage("ironplate.png");

var keysDown = [];
var mouseDown = [];

var GAMESPEED = 60;

canvas.addEventListener("mousemove",mouseMoveEvent);
canvas.addEventListener("mouseup",mouseReleaseEvent);
canvas.addEventListener("mousedown",mousePressEvent);
//window.addEventListener("key",keyEvent);
window.addEventListener("keydown",keyPressEvent);
window.addEventListener("keyup",keyReleaseEvent);
window.addEventListener('contextmenu', event => event.preventDefault());

drawSetFont("16px Tahoma");
setGameSpeed(GAMESPEED);
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

var frame=0;

var gameObjs = [];

instance_create(new DebugObj(0,0,null));
instance_create(new IronPlate(48,48,ironplate));


function onGameUpdate() {
	setBackgroundColor("black");
	gameObjs.forEach(stepEvent);
	gameObjs.forEach(drawObject);
}

function stepEvent(item,index) {
	item.stepEvent();
}

function drawObject(item,index) {
	//drawText(64,32*(index+1),"Draw Object: "+item+" ("+item.visible+") / ("+item.x+","+item.y+")");
	item.drawEvent();
}

function mouseMoveEvent(e) {
	for (i=0;i<gameObjs.length;i++) {
		gameObjs[i].mouseMoveEvent(e);
	}
}

function keyEvent(e) {
	for (i=0;i<gameObjs.length;i++) {
		gameObjs[i].keyEvent(e);
	}
}

function mousePressEvent(e) {
	//https://www.w3schools.com/jsref/obj_mouseevent.asp
	/*
		"LEFT"
		"RIGHT"
		"MIDDLE"
		"MOUSE4"
		"MOUSE5"
	*/
	var pressedDown = {left:false,right:false,middle:false,mouse4:false,mouse5:false}
	mouseDown.splice(0,mouseDown.length);
	var buttonamt = e.buttons;
	if (buttonamt>=16) {buttonamt-=16;pressedDown.mouse5=true;mouseDown.push("MOUSE5");}
	if (buttonamt>=8) {buttonamt-=8;pressedDown.mouse4=true;mouseDown.push("MOUSE4");}
	if (buttonamt>=4) {buttonamt-=4;pressedDown.middle=true;mouseDown.push("MIDDLE");}
	if (buttonamt>=2) {buttonamt-=2;pressedDown.right=true;mouseDown.push("RIGHT");}
	if (buttonamt>=1) {buttonamt-=1;pressedDown.left=true;mouseDown.push("LEFT");}
	for (i=0;i<gameObjs.length;i++) {
		gameObjs[i].mousePressEvent(e,pressedDown);
	}
}

function mouseReleaseEvent(e) {
	var pressedDown = {left:false,right:false,middle:false,mouse4:false,mouse5:false}
	mouseDown.splice(0,mouseDown.length);
	var buttonamt = e.buttons;
	if (buttonamt>=16) {buttonamt-=16;pressedDown.mouse5=true;mouseDown.push("MOUSE5");}
	if (buttonamt>=8) {buttonamt-=8;pressedDown.mouse4=true;mouseDown.push("MOUSE4");}
	if (buttonamt>=4) {buttonamt-=4;pressedDown.middle=true;mouseDown.push("MIDDLE");}
	if (buttonamt>=2) {buttonamt-=2;pressedDown.right=true;mouseDown.push("RIGHT");}
	if (buttonamt>=1) {buttonamt-=1;pressedDown.left=true;mouseDown.push("LEFT");}
	for (i=0;i<gameObjs.length;i++) {
		gameObjs[i].mouseReleaseEvent(e,pressedDown);
	}
}

function keyPressEvent(e) {
	//https://www.w3schools.com/jsref/obj_keyboardevent.asp
	if (keysDown.indexOf(e.key)==-1) {
		keysDown.push(e.key);
	}
	for (i=0;i<gameObjs.length;i++) {
		gameObjs[i].keyPressEvent(e);
	}
}

function keyReleaseEvent(e) {
	keysDown.pop(keysDown.indexOf(e.key));
	for (i=0;i<gameObjs.length;i++) {
		gameObjs[i].keyReleaseEvent(e);
	}
}

window.onload = function() {
	//drawSpriteExt(320,400,ironplate,0.5,0.5);
}
