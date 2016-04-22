var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var s = document.getElementById("stop");
var dvd = document.getElementById("dvd");
var width = c.width;
var height = c.height;
var arrayBunnies = [];

var spawn = function(){
    var f1 = makeDVD("bunnies1.png");
    f1.bounce();
    arrayBunnies.push(f1);
};

var clear = function(e){
    ctx.clearRect(0,0,width,height);
    drawOutside();
}

var drawOutside = function(){
    ctx.rect(0,0,width,height);
    ctx.stroke();
}
drawOutside();

var stop = function(e){
    window.cancelAnimationFrame(hello);
}

var changey = function(){
    var fancyBunnies = arrayBunnies.filter(function(bunny){
	console.log(bunny.dvdX);
	return ((bunny.dvdX <= 20));
    }).map(function(bunny){
	return bunny.changeLogo("bunnies2.png");
    });
    console.log(fancyBunnies);
}

var makeDVD = function(imgName){
    var dvdX = Math.random()*width/2;
    var dvdY = Math.random()*height/2;
    var movingRight = true;
    var movingUp = true;
    var logo = new Image();
    logo.src = imgName;
    //loadDVD
    //ctx.drawImage(logo,dvdX,dvdY,100,100);
    
    var changeLogo = function(img){
	console.log("hiii");
	logo.src = img;
    }
    
    var bounce = function(){

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
	
	//hello = window.requestAnimationFrame(bounce);

    }
    
    return {	
	logo: logo,
	movingRight: movingRight,
	movingUp: movingUp,
	dvdX: dvdX,
	dvdY: dvdY,
	bounce: bounce,
	changeLogo: changeLogo,
    }
};


s.addEventListener("click",stop);

var animate = function(){
    clear();
    for (i=0; i<arrayBunnies.length;i++){
	currentBunny = arrayBunnies[i];
	if (currentBunny.movingUp){
	    currentBunny.dvdY--;
	}else{
	    currentBunny.dvdY++;
	}

	if (currentBunny.movingRight){
	    currentBunny.dvdX++;
	}else{
	    currentBunny.dvdX--;
	}

	if (currentBunny.dvdX >= width-100){
	    currentBunny.movingRight = false;
	}else{
	    if (currentBunny.dvdX <= 0){
		currentBunny.movingRight = true;
	    }
	}
	if (currentBunny.dvdY >= height-100){
	    currentBunny.movingUp = true;
	}else{
	    if (currentBunny.dvdY <= 0){
		currentBunny.movingUp = false;
	    }
	}
	changey();


	ctx.drawImage(currentBunny.logo,currentBunny.dvdX,currentBunny.dvdY,100,100);
    }
    
    hello = window.requestAnimationFrame(animate);
    
}

animate();
