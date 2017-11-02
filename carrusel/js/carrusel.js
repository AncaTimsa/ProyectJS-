


$( document ).ready(function() {

	$("#slide1").click(function(){
		$("#img1").animate({"margin-left":"-1125px"},1000);
		console.log("imagen 1")
		$("#img2").animate({"margin-left":"0"},1000);
		

	});
    console.log( "ready1" );

});


$("#slide2").click(function(){
	$("#img2").animate({"margin-left":"0px"},1000);
	$("#img3").animate({"margin-left":"1125px"},1000);
	$("#img1").animate({"margin-left":"-1125px"},1000);
	 console.log( "imagen 2 " );
});


$("#slide4").click(function(){
	$("#img4").animate({"margin-left":"-1125px"},1000);
	 console.log( "imagen 4 " );
});

// function definida en html en el boton que quieres clicar
function imgClick3(){
	$("#img3").animate({"margin-left":"-1125px"},1000);
	// $("#img4").removeClass("imagen").addClass("imagenPrev");
	console.log( "imagen 3 " );


};


$(document).on('mouseenter','#slide4',function () {
    "use strict";
    $(this).find('.img4').stop().animate({ 'opacity': '0' }, 800);
    console.log("entro aki")
});

$(document).on('mouseleave','#slide4',function () {
    "use strict";
    $(this).find('.img4').stop().animate({ 'opacity': '1' }, 800);
    console.log("entro aki")
});
  
