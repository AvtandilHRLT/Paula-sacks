$(document).ready(function() {

    // BURGER

    $('.burger').click(function(event) {
        $('.burger , .navmenu>ul').toggleClass('active');
        $('body').toggleClass('lock');

    })

    $('.arrow').click(function(event) {
        $('.arrow , #accard').toggleClass('active_accard');
        $('body').toggleClass('lock');

    })
    $('.arrow-next').click(function(event) {
        $('.arrow-next , #accard').toggleClass('active_accard1');
        $('body').toggleClass('lock');

    })


    // play video //

    $('.play__video').click(function(event) {
        $('.play__video , #player__video, img').toggleClass('active_video');
        $('body').toggleClass('lock');

    })
    
    $('.acquaintance__btn-right').click(function(event) {
        $('.play__video , #player__video, img').toggleClass('active_video');
        $('body').toggleClass('lock');

    })


    $('.play__video1').click(function(event) {
        $('.play__video , #player__video1, img').toggleClass('active_video1');
        $('body').toggleClass('lock');

    })
    
    $('.acquaintance__btn-right').click(function(event) {
        $('.play__video , #player__video1, img').toggleClass('active_video1');
        $('body').toggleClass('lock');

    })


    // end play video //
    $('.burger__main-menu>ul>li>a').click(function (event) {
        $('.burger-icon, .burger').toggleClass('active');
        $('body').toggleClass('lock');
	
    })
    //END BURGER

    $('.accardeon__btn1').click(function() {
        $('.desc1').stop().slideToggle('slov');
        $('.accardeon__content').toggleClass('active__accardeon1');
        $('.accardeon__btn1').toggleClass('color-blue');


    })
     $('.accardeon__btn2').click(function() {
        $('.desc2').stop().slideToggle('slov');
        $('.accardeon__content').toggleClass('active__accardeon2');
        $('.accardeon__btn2').toggleClass('color-blue');



    })
      $('.accardeon__btn3').click(function() {
        $('.desc3').stop().slideToggle('slov');
        $('.accardeon__content').toggleClass('active__accardeon3');
        $('.accardeon__btn3').toggleClass('color-blue');
    })
})