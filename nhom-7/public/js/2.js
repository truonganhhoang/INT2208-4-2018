main();

function main() {
    checkWindowSize();
    // remove container in window when it's smaller than 992px
    $(window).resize(function () {
        if ($(this).width() < 992) {
            $("#body").removeClass("container");
        } else $("#body").addClass("container")
    });

    // chage active carousel
    $("#second-carousel").children()[0].classList.add("active", "scroll");
    $("#carousel-1").carousel({
        interval: 200000
    });
}

function checkWindowSize() {
    if ($(this).width() < 992) {
        $("#body").removeClass("container");
    } else $("#body").addClass("container")
}