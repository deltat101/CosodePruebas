$(document).ready(function () {
    
    $('.desplegar-menu').click(function () {
        $('.desplegable').fadeIn();
        $('.desplegar-menu').fadeOut();
    });

    $('.cerrar').click(function () {
        $('.desplegable').fadeOut();
        $('.desplegar-menu').fadeIn();
    });

    $(window).ready(function () {
        $('.desplegar-menu').fadeIn()
    })
    $('.ir-arriba').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.ir-arriba').fadeIn();
        } else {
            $('.ir-arriba').fadeOut();
        }

    });
});