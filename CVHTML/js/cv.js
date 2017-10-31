
$(document).ready(function(){

   $(window).scroll(function(){
            	var top = 0;
				var windowHeight = $(window).scrollTop();
				var contenido2 = $(".contPrimcipal").position();
				contenido2 = windowHeight;
 
				    if(contenido2 == windowHeight){
					$(contenido2 = 0);
 
				    }else{
					$(top = true);
				}
				console.log( windowHeight + " :scrollTop :windowHeight");
				console.log( contenido2 + " :scrollTop :contenido2");
				console.log( top + " :scrollTop :top");

		               });
                });

  






// /* obtener valor */
// $("#section2-2").offset();
// /* establecer valor */
// $("#section2-2").offset({top:value,left:value});
// console.log( "left: " + position.left + ", top: " + position.top);


// var coordenadas = $("#section2-2").position();

// $(document).ready(function(){
//  	$("#section2").click(function(){
//  		var coordenadas = $("#section2-2").position();
// 		$("#section2-2").html("Y: " + coordenadas.top + " X: " + coordenadas.left);
// 		console.log("Y: " + coordenadas.top + " X: " + coordenadas.left);
// 	});   	
// });


// $(window).scroll(function(){
//     var coordenadas = $("#section2-2").position();
//      var scroll = $(window).scrollTop();
//      console.log(scrollTop);

//     if (coordenadas == -200 ){
//     	$(coordenadas).css({
//     		"left":"200px"
//     	});
//     	console.log("left")
//     }

// });




$(window).scroll( function() { 
	 var scrolled_val = $(document).scrollTop().valueOf();
	 console.log(scrolled_val+ ' = scroll value');

	     if (scrolled_val >= 200) {
	     		$("#section2-2").animate({"left":"0"});
	     		$("#section2-2").fadeIn(100);

    	}else{
    			$("#section2-2").animate({"left":"-800px"});
    			$("#section2-2").fadeOut(100);
    	};
    	console.log("no va")

    	 if (scrolled_val >= 200) {
	     		$("#section2-3").animate({"right":"0"});
	     		$("#section2-3").fadeIn(100);

    	}else{
    			$("#section2-3").animate({"right":"-800px"});
    			$("#section2-3").fadeOut(100);
    	};
    	console.log("no va")


    
    });

 


