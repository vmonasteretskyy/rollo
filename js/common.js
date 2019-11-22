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
        $('.measure__accdescription').not($(this).next()).slideUp();

        $('.measure__accblock').not($(this).parent()).removeClass('shadow');
        $(this).parent('.measure__accblock').toggleClass('shadow');
    });
    // accordeon - END
    // USER form
    $('.user-form__field .edit-btn').click(function () {
        $(this).next().prop('disabled', false);
        $(this).parent().addClass('active-inpf');
        $(this).hide();
    });

    // parallax
    // parallax
    if ($('*').is('#scene')) {
        $("#scene").parallax();
    }

    // login
    $('.signforms .registration').click(function () {
        $('.logintab').hide();
        $('.regtab').show();
    });
    $('.forgotpass-text').click(function () {
        $('.logintab').hide();
        $('.forgotpasstab').show();
    });
    $('.signforms__btnsbox .back').click(function () {
        $('.forgotpasstab, .regtab').hide();
        $('.logintab').show();
    });
    // product slider
    $('.prodslider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        dots: false,
        arrows: true,
    });
});




// MAP
if ($('*').is('#map')) {

    function initMap() {
        if ($(window).width() < 768) {
            var latc1 = 49.8113999;
            var lngc1 = 23.9748614;
        } else {
            var latc1 = 49.8113999;
            var lngc1 = 23.9778614;
        }
        let lat1 = 49.811954, lng1 = 23.9751068;
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: latc1, lng: lngc1
            }
            // center: {
            //     lat: 49.8113999, lng: 23.9778614
            // }
            , zoom: 17, mapTypeId: "roadmap", panControl: !1, zoomControl: !1, scaleControl: !1, disableDefaultUI: !0, styles: [

            ],
            // zoomControl: true,
            // mapTypeControl: true,
            // scaleControl: true,
            // streetViewControl: true,
            // rotateControl: true,
            // fullscreenControl: true
        }
        );

        var features = [
            {
                position: new google.maps.LatLng(lat1, lng1),
                type: 'info'
            }
        ];

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat1, lng1),
            map: map,
            icon: {
                url: "image/icon/marker-map.svg",
                scaledSize: new google.maps.Size(18, 18) // pixels
            }
        });
    }
}
// MAP END