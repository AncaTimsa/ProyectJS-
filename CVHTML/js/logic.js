var islas = [];
var isla = {};

var selected_islands = [];

var islands_name = [];

// Cargo de forma dinámica, leyendo de un JSON (file.json) que se encuentra en la carpeta raiz del proyecto y que contiene los nombres de cada isla, mediante jQUERY.
$.getJSON( "file.json", function( data ) {
  $.each( data, function( key, val ) {
    islands_name.push(val)
  });
});

// IMPORTANTE: Cada vez que se recarga la página se ejecuta la función "islandGenerator" que lo que hace es asignar a cada nombre de Isla que había en el JSON
// Y que se guardó en el objeto "islands_name", unas características especiales, como su tamaño en hectáreas, temperaturas máxima y mínima, el precio, etc.
// De esta manera, y sólo a modo ilustrativo, estamos generando Islas con características diferentes cada vez que recargamos la página.
// Es decir, en lugar de tener todos los datos de las Islas en una base de datos (que es como debería ser) o en un JSON, sólo guargamos en el JSON los nombres
// de las Islas y todo lo demás lo generaríamos al vuelo con la función "islandGenerator".

// Además la siguiente función, no sólo genera las características de cada Isla, sino que también genera al vuelo el contenedor en donde se mostrará cada
// una en la página web, aunque en un principio todos estos contenedores se encontrarán ocultos al usuario, y sólo irán apareciendo a medida que se
// utilice el buscador de Islas.
islandGenerator = function(){

	j = 1;
	
	while (islands_name.length > 0){
		$("<div id='island"+j+"' class='col-md-4 col-sm-6 col-xxs-12'></div>").appendTo("#islands_container").addClass("center hidden island");

		var isla = {};
		isla.name = islands_name.shift();
		isla.id = j;
		isla.hect = Math.floor(Math.random() * (70 - 10) + 10);
		isla.tempMin = Math.floor(Math.random() * (23 - 19) + 19);
		isla.tempMax = Math.floor(Math.random() * (35 - 31) + 31);
		isla.veg = Math.floor(Math.random() * (3 - 1) + 1);
		isla.anim = Math.floor(Math.random() * (3 - 1) + 1);
		isla.animPel = Math.floor(Math.random() * (3 - 1) + 1);
		isla.price = (Math.floor(Math.random() * (20 - 1) + 1)) * 1000000;
		islas.push(isla);
		j++;
	}

}

setTimeout(function(){
	islandGenerator();
},300)


function showIslands(anim, selectedIslands) {
$(".island").addClass('hidden');
	for (var i=0; i<selectedIslands.length; i++){
		$('#island'+selectedIslands[i].id).removeClass(anim + ' animated hidden').addClass(anim + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass(anim + ' animated hidden');
    });
	}
}

// La siguiente función contiene la lógica de la búsqueda. En primer lugar extrae los datos del formulario del buscador y los almacena en variables
// para posteriormente comparar con un IF dichos datos con los datos del objeto quer contiene las características de las Islas, y las que cumplan
// con los requisitos serán mostradas en la página Web.

$("#findIsland").click(function(e){

	e.preventDefault();
    var anim = 'bounceInLeft';

    $(".island").addClass('hidden');

	selected_islands = [];

	var island_size = $("#island_size").val();
	var island_tempmin = $("#island_tempmin").val();
	var island_tempmax = $("#island_tempmax").val();
	var island_anim = $("#island_anim").val();
	var island_animpel = $("#island_animpel").val();
	var island_price = $("#island_price").val();

	var y = 1;

	for (var i=0; i<islas.length; i++){


		if ( ((islas[i].hect >= island_size) || !island_size)  && ((islas[i].tempMin >= island_tempmin) || !island_tempmin) && ((islas[i].tempMax <= island_tempmax) || !island_tempmax) && ((islas[i].anim >= island_anim) || !island_anim) && ((islas[i].animPel >= island_animpel) || !island_animpel) && ((islas[i].price <= island_price) || !island_price)){
			selected_islands.push(islas[i]);
			$('#island'+islas[i].id).html('<a href="images/islasthumb/'+islas[i].name+'.jpg" class="project-item image-popup"><img src="images/islasthumb/'+islas[i].name+'.jpg" alt="Image" class="img-responsive v2"><div class="text"><h2 class="thumb-title">'+islas[i].name+'</h2></div></a>');
			y++;
		}

	}

		if (y==1){
			$('#islands_container').removeClass('islands_container_bg');
		} else {
			$('#islands_container').addClass('islands_container_bg');
		}
		
	
	showIslands(anim, selected_islands);

	setTimeout(function(){
		
		$.get('js/jquery.magnific-popup.min.js');
		$.get('js/magnific-popup-options.js');

	},200);

	// console.log(JSON.stringify(selected_islands))

})