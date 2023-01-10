$(document).ready(function(){
    var littleBox = $("#box");
    var littleBox2 = $("#box2");
    var input = $("#name");
    var input2 = $("#surname");
    var age = $("#age");
    var input3 = $("#mail");
    var input4 = $("#pwd");
    var buttonF = $("#button-form");
    var buttonO = $("#button-opi");

    littleBox.mouseover(function(){
        $(this).css("border-radius", "5px")
                .css("background", "green")
                .css("color", "white");
    });

    littleBox.mouseout(function(){
        $(this).css("border-radius", "none")
                .css("background", "red")
                .css("color", "white");
    });

    // Animación para cabecera
    littleBox.hide();
    
    littleBox.click(function(){
        $(this).hide();
        littleBox2.show();
        $("#message").show('fast');
    });

    littleBox2.click(function(){
        $(this).hide();
        littleBox.show();
        $("#message").hide();
    });
    // Fin de Animación

    input.click(function(){
        $(this).css("border", "2px solid violet")
                .css("padding", "5px");
    });

    input2.click(function(){
        $(this).css("border", "2px solid violet")
                .css("padding", "5px");
    });

    age.click(function(){
        $(this).css("border", "2px solid violet")
                .css("padding", "5px");
    });

    input3.click(function(){
        $(this).css("border", "2px solid violet")
                .css("padding", "5px");
    });

    input4.click(function(){
        $(this).css("border", "2px solid violet")
                .css("padding", "5px");
    });

    buttonF.mouseover(function(){
        $(this).css("background", "lightgray")
                .css("color", "white");
    });

    buttonF.mouseout(function(){
        $(this).css("border", "2px dashed gray")
                .css("background", "#fff")
                .css("color", "black");
    });

    buttonO.mouseover(function(){
        $(this).css("border", "1px solid black")
                .css("background", "white")
                .css("color", "blue");
    });

    buttonO.mouseout(function(){
        $(this).css("border", "2px solid white")
                .css("background", "#black")
                .css("color", "blue")
                .css("padding", "5px");
    });
});

// Slider

$(function(){
    if($('.gallery-wrapper').length){
        var galleryThumbs = new Swiper('.gallery-wrapper .content .gallery.thumb .swiper-container', {
            speed: 900,
            effect: 'slide',
            spaceBetween: 12,
            grabCursor: false,
            simulateTouch: true,
            loop: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.thumb .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.thumb .swiper-prev-button',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                414: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 10
                }
            },
			  on: {
				  init: function() { 
				  	let containerThumbWidth = $('.gallery-wrapper .content .gallery.thumb').outerWidth();
	
	let totalThumbWidth = 0;
	
	$('.gallery.thumb .swiper-container .swiper-wrapper .swiper-slide').each(function(){
		let thumbWidth = $(this).outerWidth();
		totalThumbWidth += thumbWidth
	});
	
	
	
	if(totalThumbWidth < containerThumbWidth){
		$('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').addClass('hide');
	}else{
		$('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').removeClass('hide');
	}
			   }
			  }
        });

        var galleryFull = new Swiper('.gallery-wrapper .content .gallery.full .swiper-container', {
            speed: 900,
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
                stopOnLastSlide: false
            },
            keyboard: {
                enabled: true,
            },
            grabCursor: false,
            simulateTouch: false,
            loop: true,
            navigation: {
                nextEl: '.gallery-wrapper .content .gallery.full .swiper-next-button',
                prevEl: '.gallery-wrapper .content .gallery.full .swiper-prev-button',
            },
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChangeTransitionStart: function () {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide .overlay').removeClass('show');
                },
                slideChangeTransitionEnd: function () {
                    $('.gallery-wrapper .content .gallery.full .swiper-slide-active .overlay').addClass('show');
                }
            }
        });
    }
});


$(window).on("load", function() {
    setTimeout(function(){
        $('.loader').fadeOut();
    }, 1000);
});