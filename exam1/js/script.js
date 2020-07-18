

$(document).ready(function () {
    $(".menu__burger").click(function (event) {
        $(".menu__burger,.menu__nav,.burger__span").toggleClass("active");
        $("body").toggleClass("lock");
    });
}); 