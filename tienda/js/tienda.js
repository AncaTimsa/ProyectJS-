

// $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

$( document ).ready(function() {
	$(".prew").click(function(){
		$(".position1").animate({"left": "-570px"}, 1000);
		$(".position2").animate({"left": "0px"}, 1000);
		$(".position3").animate({"left": "570px"}, 1000);
		// $("#negra").animate({"left": "-568px"}, 1000)
		console.log( "position1!" );
    //  var position2 =  $(".position2").left();
    //  left = true;
    // if (position2 = left ) {
    //     position2
    // }
      position2();
	});
    


    $(".forw").click(function(){
		$(".position1").animate({"left": "-570px"}, 1000);
		$(".position2").animate({"left": "0px"}, 1000);
		$(".position3").animate({"left": "770px"}, 1000);
		// $("#negra").animate({"left": "-568px"}, 1000)
		console.log("me muevo")
		position3();
	})
    console.log( "position2!" );
});


function position2(){
    $(".prew").click(function(){
    	$(".position2").animate({"left": "-570px"}, 1000);
		$(".position3").animate({"left": "0px"}, 1000);
    })
};


function position3(){
    $(".forw").click(function(){
    	$(".position1").animate({"left": "0px"}, 1000);
    	$(".position2").animate({"left": "570px"}, 1000);
		$(".position3").animate({"left": "770px"}, 1000);
    })
};