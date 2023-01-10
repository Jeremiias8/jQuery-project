//$(document).ready(function(){
    //$('.slider').bxSlider();
//});

<!-- Slider -->
<div class="slider">
    <div><img src="img/business.jpg" title="Business" class="foto1-slider" ></div>
    <div><img src="img/businessman.jpg" title="Buss Man" class="foto2-slider" ></div>
    <div><img src="img/closeup-of-businessman-suit.jpg" title="Suit B Man" class="foto3-slider" ></div>
</div>

<script>
    $('.slider').bxSlider({
        autoControls: true,
        auto: true,
        pager: true,
        slideWidth: 800,
        adaptiveHeight: true,
        adaptiveHeightSpeed: 700,
        mode: 'fade',
        captions: true,
        speed: 1000
    });
</script>
<!-- Fin Slider -->