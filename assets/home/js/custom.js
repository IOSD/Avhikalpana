jQuery(document).ready(function($){
	"use strict";	
	
	$("html").niceScroll({zindex:99999,cursorborder:"1px solid #424242"});
	
	//MINI MOBILE MENU...
	$('nav#main-menu').meanmenu({
		meanMenuContainer :  $('header #menu-container'),
		meanRevealPosition:  'left',
		meanScreenWidth   :  797,
		meanMenuClose     :  "X"
  });
	
   $(window).load(function() {
    //ISOTOPE CATEGORY...
    var $container = $('.gallery-container');	
    var $gw = 16;
    
    $('.sorting-container a').click(function(){ 
      $('.sorting-container').find('a').removeClass('active-sort');
      $(this).addClass('active-sort');
    
      var selector = $(this).attr('data-filter');
       $container.isotope({
        filter: selector,
          animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        },
        masonry: {
          columnWidth: $('.gallery-container .gallery').width(),
          gutterWidth: $gw
        }
      });
      return false;
    });

    //ISOTOPE...
    if($container.length){
     $container.isotope({ 
        filter: '*',
          animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        },
        masonry: {
          columnWidth: $('.gallery-container .gallery').width(),
          gutterWidth: $gw
        }
      });
    }
	});
	
	//MAIN MENU...
	$("#main-menu ul li:has(ul)").each(function(){
		$(this).addClass("hasSubmenu");
	});

	//GOOGLE MAPS...
	var $map = $('#map');
	if( $map.length ) {
		$map.gMap({
			address: 'No: 58 A, East Madison St, Baltimore, MD, USA',
			zoom: 16,
			markers: [ { 'address' : 'No: 58 A, East Madison St, Baltimore, MD, USA' } ]
    });
	}

	$map = $('#footer_map');
	if( $map.length ) {
		$map.gMap({
			address: 'No: 58 A, East Madison St, Baltimore, MD, USA',
			zoom: 16,
			markers: [ { 'address' : 'No: 58 A, East Madison St, Baltimore, MD, USA' } ]
		});
	}
	
	//TABS...
	if($('.tabs-vertical-frame').length > 0){
		
		$('.tabs-vertical-frame').tabs('> .tabs-vertical-frame-content');
		
		$('.tabs-vertical-frame').each(function(){
            $(this).find("li:first").addClass('current');
		});
		
		$('.tabs-vertical-frame li').click(function(){
            $(this).parent().children().removeClass('current');
            $(this).addClass('current');
		});
	}
	
	//PROGRESS BAR...
	$('#donutchart1').one('inview', function (event, visible) {
		if (visible === true) {
			$("#donutchart1").donutchart({'size': 140, 'donutwidth': 10, 'fgColor': '#E74D3C', 'bgColor': '#f5f5f5', 'textsize': 15 });
			$("#donutchart1").donutchart("animate");
			
			$("#donutchart2").donutchart({'size': 140, 'donutwidth': 10, 'fgColor': '#FF7F50', 'bgColor': '#f5f5f5', 'textsize': 15 });
			$("#donutchart2").donutchart("animate");
			
			$("#donutchart3").donutchart({'size': 140, 'donutwidth': 10, 'fgColor': '#8aba23', 'bgColor': '#f5f5f5', 'textsize': 15 });
			$("#donutchart3").donutchart("animate");
			
			$("#donutchart4").donutchart({'size': 140, 'donutwidth': 10, 'fgColor': '#35aad8', 'bgColor': '#f5f5f5', 'textsize': 15 });
			$("#donutchart4").donutchart("animate");
		}
	});
	
	//PRETTYPHOTO...	
	var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
	if($pphoto.length){
		//PRETTYPHOTO...
		$("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({ 
			show_title: false,
			social_tools: false,
			deeplinking: false
		});
	}
	
	//SPONSOR CAROUSEL...
	if($(".sponsor-carousel-wrapper").length) {
      $('.sponsor-carousel').carouFredSel({
		responsive: true,
		auto: false,
		width: '100%',
		prev: '.sponsor-prev-arrow',
		next: '.sponsor-next-arrow',
		height: 'auto',
		scroll: 1,				
		items: {
         width: 230,
         visible: {
            min: 1,
            max: 4
         }
      }
    });
	}
	
	//GALLERY SLIDESHOW...
	if($(".gallery-slider, .event-slider, .blog-slider").length) {
		$('.gallery-slider, .event-slider, .blog-slider').bxSlider({
			auto:false, video:false, useCSS:false, pager:'', autoHover:true, adaptiveHeight:true
		});
	}
	
	//EVENTS CAROUSEL...
	if($(".event-carousel-wrapper").length) {
		$('.event-carousel').carouFredSel({
		responsive: true,
		auto: false,
		width: '100%',
		prev: '.event-prev-arrow',
		next: '.event-next-arrow',
		scroll: 1,
		items: {
			width: 940,
			height : 'auto',
			visible: {
			min: 1,
			max: 1
			}
		}				
	});			
	}
	
	//GO TO TOP...
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});
	
});

// animate css + jquery inview configuration
(function ($) {
    "use strict";
    $(".animate").each(function () {
        $(this).one('inview', function (event, visible) {
            var $delay = "";
            var $this = $(this),
                $animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
            $delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 300;

            if (visible === true) {
                setTimeout(function () {
                    $this.addClass($animation);
                }, $delay);
            } else {
                setTimeout(function () {
                    $this.removeClass($animation);
                }, $delay);
            }
        });
    });
})(jQuery);


/*(function($){
	$(".animate").each(function(){
		$(this).one('inview', function (event, visible) {
			var $this = $(this),
				$animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
				$delay = ( $this.data("delay") !== undefined ) ? $this.data("delay") : 300;
				
				if (visible === true) {
					setTimeout(function() { $this.addClass($animation);	},$delay);
				}else{
					setTimeout(function() { $this.removeClass($animation); },$delay);
				}
		});
	});
})(jQuery);  */

