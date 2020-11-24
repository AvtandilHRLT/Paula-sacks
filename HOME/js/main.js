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
    

    $('.burger__main-menu>ul>li>a').click(function (event) {
        $('.burger-icon, .burger').toggleClass('active');
        $('body').toggleClass('lock');
	
    })
    //END BURGER

})