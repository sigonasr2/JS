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

function drawSpriteExt(x,y,sprite,w,h,image_angle) {
	transformTranslate(x,y);
	transformRotate(image_angle);
	//con.globalCompositeOperation = 'multiply';
	con.drawImage(sprite,-(w*sprite.width)/2,-(h*sprite.height)/2,w*sprite.width,h*sprite.height);
	/*con.fillStyle = image_blend;
	con.fillRect(0,0, w*sprite.width, h*sprite.height); 
	con.globalCompositeOperation = 'destination-atop';
	con.drawImage(sprite,-(w*sprite.width)/2,-(h*sprite.height)/2,w*sprite.width,h*sprite.height);
	con.globalCompositeOperation = 'normal';*/
	resetTransform();
}

function drawSpritePart(x,y,sprite,spritex,spritey,spritew,spriteh,w,h,image_angle) {
	transformTranslate(x,y);
	transformRotate(image_angle);
	con.drawImage(sprite,spritex,spritey,spritew,spriteh,-(w*spritew)/2,-(h*spriteh)/2,spritew*w,spriteh*h);
	resetTransform();
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

function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}