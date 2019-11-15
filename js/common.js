$(document).ready(function () {

    // home slider
    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next">наступний</button>',
        prevArrow: false,
        dots: true,
    });
    // home slider - END

    // burger menu
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('header.header .col-xl-7.col-lg-6').toggle();
    });

    if ($(window).width() < 992) {
        $('.header__menu>ul li span').click(function () {
            $('header.header .submenu').not($(this).next()).hide();
            $(this).next().toggle();
            $('.header__menu>ul li span').not($(this)).removeClass('actaft');
            $(this).toggleClass('actaft');
        });
    }
    // burger menu -END

    // menu category pic
    $('.header__menu>ul .submenu.megamenu ul li a[data-imghov]').mouseover(function () {
        var newHover = $(this).attr('data-imghov');
        var textHover = $(this).attr('data-texthov');
        $('.header__categorypic img').attr('src', newHover);
        $('.header__categorypic p').html(textHover);
    })
    // menu category pic - END

    // input slyled
    $(function () {
        $('select').styler();
    });
    // input slyled - END
});