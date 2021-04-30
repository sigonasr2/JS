class Object {
	constructor(sprite,visible,x,y) {
		this.sprite=sprite;
		this.visible=visible;
		this.x=x;
		this.y=y;
		this.speed=0;
		this.image_xscale=1;
		this.image_yscale=1;
		this.image_angle=0;
	}
	stepEvent() {
		this.image_angle+=0.5;
	}
	drawEvent() {
		if (!this.visible) {
			return;
		} else {
			resetTransform();
			drawSetColor("white");
			if (typeof this.sprite!=="undefined" && this.sprite!=null) {
				drawSpriteExt(this.x,this.y,this.sprite,this.image_xscale,this.image_yscale,this.image_angle);
				//drawSpritePart(this.x,this.y,this.sprite,3,3,20,20,this.image_xscale,this.image_yscale,this.image_angle)
			}
			resetTransform();
		}
	}
	mouseMoveEvent(e) {
		
	}
	touchMoveEvent(e) {
		
	}
	keyPressEvent(e) {
		
	}
	keyReleaseEvent(e) {
		
	}
	mousePressEvent(e,pressed) {
		
	}
	mouseReleaseEvent(e,pressed) {
		
	}
	mouseEvent(e) {
		
	}
}

class DebugObj extends Object{
	constructor(x,y,sprite) {
		super(sprite,true,x,y);
		var d = new Date();
		this.timer=d.getTime();
		this.frameCount=0;
		this.lastFrameAmt=0;
		this.storedMouseX=0;
		this.storedMouseY=0;
		this.lastMessage="";
		this.eventCount=0;
	}
	stepEvent() {
		//super.stepEvent();
		var d = new Date();
		var currentTime = d.getTime();
		if (currentTime-this.timer>=1000) {
			this.lastFrameAmt=this.frameCount;
			this.frameCount=0;
			this.timer=currentTime;
		}
		this.frameCount++;
	}
	drawEvent() {
		super.drawEvent();
		drawSetColor("white");
		drawText(20,20,"Object Count:"+gameObjs.length+" // "+frame++);
		drawSetHAlign("right");
		drawSetVAlign("bottom");
		drawText(
		canvas.width,canvas.height-20,"Events: "+this.eventCount);
		drawText(
		canvas.width,canvas.height,"MOUSE: ("+this.storedMouseX+
		","+this.storedMouseY+")  "+this.lastFrameAmt+" FPS");
		drawSetHAlign("left");
		drawSetVAlign("top");
		drawText(64,64,this.lastMessage);
		drawText(64,84,keysDown.toString());
		drawText(64,104,mouseDown.toString());
		this.counter=0;
		/*for (i=this.messages.length-1;i>=0;i--) {
			drawText(20,48+20*i,this.messages[i]);
		}*/
	}
	mouseMoveEvent(e) {
		this.eventCount++;
		super.mouseMoveEvent(e);
		this.storedMouseX=e.offsetX;
		this.storedMouseY=e.offsetY;
		//this.messages.push(this.lastMessage);
	}
	mousePressEvent(e,pressed) {
		this.eventCount++;
		super.mousePressEvent(e,pressed);
		this.lastMessage="Mouse Press Event: "+JSON.stringify(pressed);
	}
	mouseReleaseEvent(e,pressed) {
		this.eventCount++;
		super.mouseReleaseEvent(e,pressed);
		this.lastMessage="Mouse Release Event: "+JSON.stringify(pressed);
	}
	keyPressEvent(e) {
		this.eventCount++;
		super.keyPressEvent(e);
		this.lastMessage="Key Press Event: "+e.key+"";
	}
	keyReleaseEvent(e) {
		this.eventCount++;
		super.keyReleaseEvent(e);
		this.lastMessage="Key Release Event: "+e.key+"";
	}
	touchMoveEvent(e) {
		this.eventCount++;
		super.touchMoveEvent(e);
		this.lastMessage="Key Release Event: "+e.key+"";
	}
}

class IronPlate extends Object{
	constructor(x,y,sprite) {
		super(sprite,true,x,y);
	}
	stepEvent() {
		super.stepEvent();
		
	}
	drawEvent() {
		super.drawEvent();
	}
}