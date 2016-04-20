var makePlayground(){

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
    logo.src = "logo_dvd.jpg";

    s.addEventListener("click",stop);
    dvd.addEventListener("click",animateDVD);

    return {
	loadDVD: function(){ clear(); 
			     ctx.drawImage(logo,dvdX,dvdY,100,100);
			   },
	bounce:function(){

	},
    }
};
