


function opacitycycle(array, identity, timediff,){

		var object = document.getElementById(identity);

		for (var i = inputstream.length - 1; i >= 0; i--) {
					inputstream[i] = inputstream[i]/100;      //to be replaced by the appropriate conversion algorithm
		}
	

		for (var i = 0; i <= inputstream.length - 1; i++) {
			
					(function (i) {
				    setTimeout(function () {
				      
					  object.style.opacity = inputstream[i];  //to be replaced by the respective property
				     }, timediff*i);
				    })(i);
		}


}


