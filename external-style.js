
// box 1 starter



function changeBG(el,clr){ // dette ændrer farven på element
	var elem = document.getElementById("box1");
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = clr;
}




function Fadeout(el){ // dette ændrer opacity på element
	var elem = document.getElementById("box1");
	elem.style.transition = "opacity .5s linear 0s";
	elem.style.opacity = 0;
}


function Fadein(el){
	var elem = document.getElementById("box1");
	elem.style.transition = "opacity .5s linear 0s";
	elem.style.opacity = 1;
}

// box 1 slutter



// box 2 starter



function Slideopen(el){ // dette ændrer højden på element
	var elem = document.getElementById("box2");
	elem.style.transition = "height .5s linear 0s";
	elem.style.height = "200px";
}

function Slideclosed(el){
	var elem = document.getElementById("box2");
	elem.style.transition = "height .5s linear 0s";
	elem.style.height = "0px";
}

// box 2 slutter




// box 3 starter

function Slidein(el){ // dette ændrer højden på element
	var elem = document.getElementById("box3");
	elem.style.transition = "left 1.0s linear 0s";
	elem.style.left = "0px";
}

function Slideout(el){
	var elem = document.getElementById("box3");
	elem.style.transition = "left 1.0s linear 0s";
	elem.style.left = "-400px";
}



// box 3 slutter


var el = document.getElementById("box4");
//el.style.transition = "transform 2.5s linear 0s, opacity 1.5s linear 0s";
el.addEventListener( "transitionend", function(event){
	alert(event.propertyName+" transition has ended. The elapsed time was "+event.elapsedTime);
} );
