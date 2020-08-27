
//Burger
$(document).ready(function () {
    $(".menu__burger").click(function (event) {
        $(".menu__burger,.menu__nav,.burger__span").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

//Scroll

$(window).scroll(function () {
    $('.mov').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
            $(this).addClass('animate__fadeInLeft');
        }
    });
});

$(window).scroll(function () {
    $('.mov2').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
            $(this).addClass('animate__fadeInRight');
        }
    });
});


$(window).scroll(function () {
    $('.mov3').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('animate__zoomIn');
        }
    });
});

$(window).scroll(function () {
    $('.mov4').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass('animate__zoomIn');
        }
    });
});

//Плавний перехід між якорями
$(document).ready(function () {
    $("#menu__nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});