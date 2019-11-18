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
        $('.submenu').hide();
        $('.header__menu>ul li span').removeClass('actaft');
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
        $('select, .filter__lists.radiostyled input[type="radio"], .check-formfield input').styler();
    });
    // input slyled - END

    // Catalog filter
    $('.filter__title').click(function () {
        $(this).toggleClass('rotatearrow');
        $(this).next('.filter__lists').slideToggle();
    });
    // Catalog filter end

    // input mask
    if ($('*').is('.form-section')) {
        $('.email-input').inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                '*': {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                    casing: "lower"
                }
            }
        });

        $(".phone-input").inputmask({ "mask": "(999) 999-9999" });
    }
    // input mask END

    // num products + or -
    // plus minus
    function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    $('.input-group').on('click', '.button-plus', function (e) {
        incrementValue(e);
    });

    $('.input-group').on('click', '.button-minus', function (e) {
        decrementValue(e);
    });

    // num products END

    // remove row - buy page
    $('.incard__remove').click(function () {
        $(this).parents('.incard__row').fadeOut();

    });
    // remove row - buy page - END

    // accordeon
    $('.measure__acctitle').click(function () {
        $(this).next().slideToggle();
        $(this).parent('.measure__accblock').toggleClass('shadow');
    });


    // accordeon - END
});