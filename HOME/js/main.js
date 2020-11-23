$(document).ready(function() {

    // BURGER

    $('.burger').click(function(event) {
        $('.burger, .navmenu>ul').toggleClass('active');
        $('body').toggleClass('lock');

    })

    $('.burger__main-menu>ul>li>a').click(function (event) {
        $('.burger-icon, .burger').toggleClass('active');
        $('body').toggleClass('lock');
        

    	
    })
    //END BURGER

    // TOP SLIDER
    $('.top-slider').slick({
        // autoplay: true
    });
    //END TOP SLIDER

    // BL4 SLIDER
    $('.bl4__slider	').slick({
        // autoplay: true
    });

    //END BL4 SLIDER

    // ACCORDEON

    $('.accordeon__btn1').click(function() {
        $('.desc1').stop().slideToggle('slov');
        $('.accordeon__content').toggleClass('active1');
        $('.accordeon__btn1').toggleClass('color-blue');


    })
     $('.accordeon__btn2').click(function() {
        $('.desc2').stop().slideToggle('slov');
        $('.accordeon__content').toggleClass('active2');
        $('.accordeon__btn2').toggleClass('color-blue');



    })
      $('.accordeon__btn3').click(function() {
        $('.desc3').stop().slideToggle('slov');
        $('.accordeon__content').toggleClass('active3');
        $('.accordeon__btn3').toggleClass('color-blue');



    })
    // END ACCORDEON





})