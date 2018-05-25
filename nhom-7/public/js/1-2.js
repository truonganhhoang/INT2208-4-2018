var secondCarousel = $("#second-carousel");
var firstCarousel = $("#first-carousel");


mainEvent1();

function mainEvent1() {
    checkWindowSize();
    // add events

    // check if user available
    $('#submit-login').submit(function (event) {
        var userName = $(this).find('#username')[0].value;
        for (var i = 0; i < userdata.length; i++) {
            if (userName === userdata[i].email) {
                $(this).find('#username')[0].value = userdata[i].username;
            }
        }
    });

    // remove container in window when it's smaller than 992px
    $(window).resize(function () {
        if ($(this).width() < 992) {
            $(".duy-cover").removeClass("container");
        } else $(".duy-cover").addClass("container")
    });

    // chage active carousel
    // first carousel
    $(firstCarousel).children()[0].classList.add("active", "scroll");
    if ($(firstCarousel).children().length < 2) {
        $(firstCarousel).siblings().addClass("d-none");
    } else $(firstCarousel).siblings().remove("d-none");
    // second carousel
    $(secondCarousel).children()[0].classList.add("active", "scroll");
    if ($(secondCarousel).children().length < 2) {
        $(secondCarousel).siblings().addClass("d-none");
    } else $(secondCarousel).siblings().remove("d-none");
    $(".carousel").carousel({
        interval: 200000
    });
}

function checkWindowSize() {
    if ($(this).width() < 992) {
        $(".duy-cover").removeClass("container");
    } else $(".duy-cover").addClass("container")
}