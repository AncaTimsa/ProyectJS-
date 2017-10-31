;(function () {

	// goToBuy
	$(".goToBuy").click(function(){
		$('html, body').animate({
			scrollTop: $("#features").offset().top
		}, 1000)
	});

	// Conócenos
	$(".goToAbout").click(function(){
		$('html, body').animate({
			scrollTop: $("#features-2").offset().top
		}, 1000)
	});

	// Conócenos
	$(".goToNuestrasIslas").click(function(){
		$('html, body').animate({
			scrollTop: $("#nuestras-islas").offset().top
		}, 1000)
	});

	// Conócenos
	$(".goToTestimonios").click(function(){
		$('html, body').animate({
			scrollTop: $("#testimonials").offset().top
		}, 1000)
	});


	// Detección de iPad y iPod	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Go to next section
	var gotToNextSection = function(){
		var el = $('.learn-more'),
			w = el.width(),
			divide = -w/2;
		el.css('margin-left', divide);
	};

	// Loader
	var loaderPage = function() {
		$(".loader").fadeOut("slow");
	};

	// FullHeight
	var fullHeight = function() {
		if ( !isiPad() && !isiPhone() ) {
			$('.js-fullheight').css('height', $(window).height() - 49);
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height() - 49);
			})
		}
	};

	// toggleBtnColor
	var toggleBtnColor = function() {

	
		if ( $('#wonder').length > 0 ) {	
			$('#wonder').waypoint( function( direction ) {
				if( direction === 'down' ) {
					$('.nav-toggle').addClass('dark');
				}
			} , { offset: - $('#wonder').height() } );

			$('#wonder').waypoint( function( direction ) {
				if( direction === 'up' ) {
					$('.nav-toggle').removeClass('dark');
				}
			} , { 
				offset:  function() { return -$(this.element).height() + 0; }
			} );
		}



	};


	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	// Clica fuera de offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#offcanvas, .js-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas-visible') ) {

    			$('body').removeClass('offcanvas-visible');
    			$('.js-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	// Offcanvas
	var offcanvasMenu = function() {
		$('body').prepend('<div id="offcanvas" />');
		$('#offcanvas').prepend('<ul id="side-links">');
		$('body').prepend('<a href="#" class="js-nav-toggle nav-toggle"><i></i></a>');

		$('.left-menu li, .right-menu li').each(function(){

			var $this = $(this);

			$('#offcanvas ul').append($this.clone());

		});
	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-nav-toggle').removeClass('active');
		   }
		});

	};


	var testimonialFlexslider = function() {
		var $flexslider = $('.flexslider');
		$flexslider.flexslider({
		  animation: "fade",
		  manualControls: ".flex-control-nav li",
		  directionNav: false,
		  smoothHeight: true,
		  useCSS: false /* Chrome fix*/
		});
	}


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};



	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	
	

	// Document on load.
	$(function(){
		gotToNextSection();
		loaderPage();
		fullHeight();
		toggleBtnColor();
		ScrollNext();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		testimonialFlexslider();
		goToTop();

		// Animate
		contentWayPoint();

	});


}());