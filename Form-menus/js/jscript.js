$(document).ready(function(){


	$("#sendForm").click(function(){

		
		var name = $("#username").val();
		var email = $("#email").val();
		var numberPhone = $("#pw").val();
		var isValid;
		var has_letters;
		var has_numbers;
		var a = parseInt("9")
		var numeros = Number.isInteger("9");
		size_correct = true;

		// phoneNumber = numberPhone.match(/[1-9]/i);

            // numberPhone = a;
		var size = name.length;

		if ( size >= 5){
			size_correct = true;
			$("#msg_validation1").html("");
		} else {
			size_correct = false;
			$("#msg_validation1").html("El username debe contener al menos 5 letras.");
			console.log(name + "username")
			
		}
		

		if ( numberPhone == a) {
			has_numbers = false;
			$("#msg_validationPhone").html("El numero no es valido");
			console.log(a + " no_numbers")
		} else {
			has_numbers = true;
			$("#msg_validationPhone").html("");
			console.log(a + " tiene_numbers")
			
		}


		if (size_correct == true && has_letters == true && has_numbers == true){
			$("#msg_validation1").html("");
		} else {
			$("#msg_validation1").html("El username debe contener al menos 5 letras.");
		}


		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	
    	if (re.test(email) == false) {
           	$("#msg_validation2").html("El email no tiene un formato válido");
        } else {
        	$("#msg_validation2").html("");
        }
        

     //    var numberPhone = $("#pw").val();
     //    var res = "";
     //     res = res + isNaN(123); 

	    // if (res.test(numberPhone) = false) {
	    // 	$("#msg_validationPhone").html("El numero es verdadero ");
	    // 	console.log("gfgfg")
	    // }else{
	    // 	$("#msg_validationPhone").html("El numero no es valido ");
	    // 	console.log("ouououo")
	    // }

	});

});









// $(document).ready(function(){

// $(".buttom").click(function(){
// 	var email = $(".email").val();
//     var pasword = $(".pasword").val();

//     if ($(email) != "") {
//     	$("p").html(" esta escrito");
//     	console.log("vacio");
//     };
// }); 
// });

// $("p").click(function(){
//     $(this).hide();
// });


// funccion mouseover mouseout ok
// $(document).ready(function(){
// 	$(".empresas").mouseover(function(){
// 		$(".subMenu1").css({"display":"block"});
// 		console.log("bajo")
// 	$(".empresas").mouseout(function(){
// 		$(".subMenu1").css({"display":"none"});
// 		console.log("arriba")
// 	});
// 	});
// });
// funccion mouseover mouseout ok





// $(document).ready(function(){
// 	$(".empresas").mouseover(function(){
// 		var	heightMenu1 = $(".subMenu1").height();

// 		console.log(heightMenu1 + " heightMenu1")
// 		$(".subMenu1").show().animate({"height": "150px"}, 1000);



// 	$(".empresas").mouseout(function(){
// 		$(".subMenu2").hide().animate({"height": "0px"}, 1000);
// 		$(".subMenu3").hide().animate({"height": "0px"}, 1000);
// 		$(".subMenu4").hide().animate({"height": "0px"}, 1000);
// 		});
	
// 	});
// });
  
  
//   $(".contacto").mouseover(function(){
// 		$(".subMenu2").show().animate({"height":"150px"});
// 		$(".subMenu1").hide().animate({"height": "0px"}, 1000);
// 		$(".subMenu3").hide().animate({"height": "0px"}, 1000);
// 		$(".subMenu4").hide().animate({"height": "0px"}, 1000);

// 		console.log("contacto abierto")
//   });
  
// 	$(".contacto").mouseout(function(){
// 		$(".subMenu1").hide().animate({"height": "0px"}, 1000);
// 		$(".subMenu3").hide().animate({"height": "0px"}, 1000);
// 		$(".subMenu4").hide().animate({"height": "0px"}, 1000);
// 		console.log("contacto cerrado");

// 	});


// // menu nosotros show end hide

// 	$( ".nosotros" ).mouseover(function() {
//   $( ".subMenu3" ).show( "slow", function() {
//     // Animation complete.
//   });
// });


// 	$( ".nosotros" ).mouseout(function() {
//   $( ".subMenu3" ).hide( "slow", function() {
//     // Animation complete.
//   });
// });
// 	// menu nosotros show end hide




// $( ".abrrir" ).click(function() {
//   $( ".menuLateral" ).show().animate({"right": "0px"}, 1000);
//   console.log("abrrir")

// });

// $( ".cerrar" ).click(function() {
//    $( ".menuLateral" ).show().animate({"right": "-213px"}, 1000);
//   console.log("cerrar")

// });


