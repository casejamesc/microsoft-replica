$(function() {

	//slide content up/down to make search input visible/hidden jQueryUI?(<540)
	$( "[alt='Toggle Search']" ).click(function() {
 		$( "div#searchAndButton" ).toggle("blind", 250);
	});

	//slide content up/down to make nav visible/hidden (<540)
	$( "[alt='Toggle Navigation']" ).click(function() {
		//if about to display
		if ($( "div#hRow3" ).css('display') == 'none') {
			$( "div#hRow3" ).removeClass('margin');
			$( "div#hRow3" ).toggle("blind", 250);
		//if about to hide
		} else {
			$( "div#hRow3" ).toggle("blind", 250);
 			$( "div#hRow3" ).addClass('margin');
 		}
 		
	});

	//banner1 slideshow
	$('#b1Slider').flexslider( {
		animationSpeed: 450,
		controlsContainer: "div#b1BannerWrapper"
		/* asNavFor: '#b1PromoSlider', */
	});

	
	////banner1 promo slideshow
	$('#b1PromoSlider').flexslider( {
		controlNav: true,
		animationSpeed: 450,

		manualControls: "#b1BannerWrapper .flex-control-nav li",
		/* sync: '#b1Slider', */
		/*
		before: function(slider){ 
			$( 'div#b1PromoSlider' ).css({'left': '+=15px', 'opacity': '0.5'});
		},
		after: function(slider){
			$( 'div#b1PromoSlider' ).animate({ left: '0', opacity: 1 }, 400); 
		} */
	});
	
	//banner2 slideshow
	$('#b2Slider').flexslider( {
		controlNav: false,
		animationSpeed: 450
	}); 
	
	
	//media queries, changes promo event handlers based on viewport size, cant beleive this works!
	var mql = window.matchMedia("(max-width: 680px)");
	mql.addListener(WidthChange);
	WidthChange(mql); // initial call on startup

	function WidthChange(mql) {
		if (mql.matches) {
			$('#b1PromoSlider').data('flexslider').setOpts({
				before: function(slider){ 
				},
				after: function(slider){ 
				}
			});
		}
		else {
			$('#b1PromoSlider').data('flexslider').setOpts({
				before: function(slider){ 
					$( 'div#b1PromoSlider' ).css({'left': '+=15px', 'opacity': '0.5'});
				},
				after: function(slider){
					$( 'div#b1PromoSlider' ).animate({ left: '0', opacity: 1 }, 400); 
				}
			});
		}
	};

	

});