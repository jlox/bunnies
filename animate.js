var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var s = document.getElementById("stop");
var dvd = document.getElementById("dvd");
var width = c.width;
var height = c.height;
var dvdX = width/2;
var dvdY = height/2;
var movingRight = true;
var movingUp = true;
var logo = new Image();


var makePlayground = function(imgName){
    logo.src = imgName;



    var drawOutside = function(){
	ctx.rect(0,0,width,height);
	ctx.stroke();
    }
    drawOutside();


    var clear = function(e){
	ctx.clearRect(0,0,width,height);
	drawOutside();
    }

    var loadDVD = function(e){
	clear(); 
	ctx.drawImage(logo,dvdX,dvdY,100,100);
    }
    
    var bounce = function(e){
	if (movingUp){
	    dvdY--;
	}else{
	    dvdY++;
	}

	if (movingRight){
	    dvdX++;
	}else{
	    dvdX--;
	}

	if (dvdX >= width-100){
	    movingRight = false;
	}else{
	    if (dvdX <= 0){
		movingRight = true;
	    }
	}
	if (dvdY >= height-100){
	    movingUp = true;
	}else{
	    if (dvdY <= 0){
		movingUp = false;
	    }
	}
	clear();
	drawOutside();
	ctx.drawImage(logo,dvdX,dvdY,100,100);
	hello = window.requestAnimationFrame(bounce());

    }
    
    hello = window.requestAnimationFrame(bounce());

    var stop = function(e){
	window.cancelAnimationFrame(hello);
    }

    return {
	clear: clear,
	loadDVD: loadDVD,
	bounce: bounce,
	stop: stop,
    }
};

var f1 = makePlayground("bunnies1.png");
s.addEventListener("click",f1.stop());
dvd.addEventListener("click",f1.bounce());
