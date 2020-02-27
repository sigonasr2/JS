function loadImage(url) {
	var img = new Image();
	img.src = url;
	return img;
}

function key_is_pressed(a) {
	return keysDown.indexOf(a)!=-1;
}

function mouse_button_is_pressed(a) {
	/*
		"LEFT"
		"RIGHT"
		"MIDDLE"
		"MOUSE4"
		"MOUSE5"
	*/
	return mouseDown.indexOf(a)!=-1;
}

function instance_create(object) {
	gameObjs.push(object);
}

function setGameSpeed(fps) {
	setInterval(onGameUpdate,1000/fps);
}

function resetTransform() {
	con.setTransform(1,0,0,1,0,0);
}

function transformScale(w,h) {
	con.scale(w,h);
}

function transformRotate(degrees) {
	con.rotate(degrees*Math.PI/180);
}

function transformTranslate(x,y) {
	con.translate(x,y);
}

function getStringWidth(text) {
	return con.measureText(text).width;
}

function drawSprite(x,y,sprite) {
	con.drawImage(sprite,x,y);
}

function drawSpriteExt(x,y,sprite,w,h) {
	con.drawImage(sprite,x,y,w*sprite.width,h*sprite.height);
}

function drawSpritePart(x,y,sprite,spritex,spritey,spritew,spriteh,w,h) {
	con.drawImage(sprite,spritex,spritey,spritew,spriteh,x,y,w,h);
}

function drawText(x,y,text) {
	con.fillText(text,x,y);
}

function setBackgroundColor(color) {
	drawSetColor(color);
	con.fillRect(0,0,canvas.width,canvas.height);
}

function drawSetAlpha(alpha) {
	con.globalAlpha = alpha;
}

function drawSetFont(font) {
	//font should be in JS style: "30px Arial"
	//https://www.w3schools.com/tags/canvas_font.asp
	con.font = font;
}

function drawSetHAlign(align) {
	//left,center,right
	con.textAlign = align;
}
function drawSetVAlign(align) {
	//top,bottom,middle,alphabetic,hanging,ideographic
	con.textBaseline = align;
}

function drawSetColor(color) {
	con.strokeStyle = color;
	con.fillStyle = color;
}

function drawLine(x1,y1,x2,y2) {
	con.moveTo(x1,y1);
	con.lineTo(x2,y2);
	con.stroke();
}

function drawRectangle(x1,y1,x2,y2,outline) {
	con.beginPath();
	con.rect(x1,y1,x2,y2);
	if (outline) {
		con.stroke();
	} else {
		con.fill();
	}
}

function drawCircle(x,y,r,outline) {
	con.beginPath();
	con.arc(x,y,r,0,2*Math.PI);
	if (outline) {
		con.stroke();
	} else {
		con.fill();
	}
}
