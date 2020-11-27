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

    $('.play__video').click(function(event) {
        $('.play__video , #player__video, img').toggleClass('active_video');
        $('body').toggleClass('lock');

    })
    
    $('.acquaintance__btn-right').click(function(event) {
        $('.play__video , #player__video, img').toggleClass('active_video');
        $('body').toggleClass('lock');

    })

    $('.burger__main-menu>ul>li>a').click(function (event) {
        $('.burger-icon, .burger').toggleClass('active');
        $('body').toggleClass('lock');
	
    })
    //END BURGER

})