var imageFlowCard = $('.img-ad-card');
var deckTitle = $('.deck-title');
var userBar = $(".nav")[0];
var authorDeck = $("p.author");
var backGroundTopCarousel = $(".row.position-relative");

main();

function main() {
    randomColor();
    changeToFit();
    checkWindowSize();
    $(window).resize(function () {
        changeToFit();
        checkWindowSize();
    });

    // chage active carousel
    $("#first-carousel").children()[0].classList.add("active");
    $("#second-carousel").children()[0].classList.add("active", "scroll");
    $("#carousel-1").carousel({
        interval: 200000
    });
}

// remove container in window when it's smaller than 992px
function checkWindowSize() {
    if ($(window).width() < 990) {
        $("#body").removeClass("container");
    } else $("#body").addClass("container")
}

// change nav-bar, deck-title font-size and image size according to screen size
function changeToFit() { //fix
    if (($(window).width() < 576)) {
        for (i = 0; i < authorDeck.length; i++) {
            // the carousel elements
            authorDeck[i].style.fontSize = "13px";
            deckTitle[i].children[0].classList.add("h5");
            deckTitle[i].style.maxWidth = "50%";
        }
        // nav bar
        userBar.style.width = "100%";
        for (i = 0; i < userBar.children.length; i++) {
            userBar.children[i].style.width = String($(window).width() / 4) + "px";
        }
    } else if (($(window).width() < 700)) {
        // nav bar
        userBar.classList.remove("position-absolute");
        userBar.style.right = "0px";
        userBar.style.width = "";
        for (i = 0; i < userBar.children.length; i++) {
            userBar.children[i].style.width = "";
        }
        // carousel
        for (i = 0; i < authorDeck.length; i++) {
            authorDeck[i].style.fontSize = "15px";
            deckTitle[i].children[0].classList.remove("h5");
            deckTitle[i].style.maxWidth = "50%";
        }
    } else if ($(window).width() < 977) {
        // nav bar
        userBar.classList.add("position-absolute");
        userBar.style.right = "-80px";
        // carousel
        for (i = 0; i < imageFlowCard.length; i++) {
            deckTitle[i].style.left = "40px";
            imageFlowCard[i].style.width = "116px";
            imageFlowCard[i].style.height = "140px";
            imageFlowCard[i].style.right = "25px";
            imageFlowCard[i].style.top = "40px";
            deckTitle[i].style.maxWidth = "50%";
        }
    } else {
        // navbar
        userBar.classList.remove("position-absolute");
        userBar.style.right = "0px";
        for (var i = 0; i < imageFlowCard.length; i++) {
            // carousel
            deckTitle[i].style.left = "60px";
            imageFlowCard[i].style.width = "144px";
            imageFlowCard[i].style.height = "166px";
            imageFlowCard[i].style.right = "60px";
            imageFlowCard[i].style.top = "30px";
            deckTitle[i].style.maxWidth = "50%";
        }
    }
}

function randomColor() {
    var red, green, blue;
    for (var i  = 0; i < backGroundTopCarousel.length; i++) {
        red = Math.floor(Math.random() * 200 + 44);
        green = Math.floor(Math.random() * 170 + 74);
        blue = Math.floor(Math.random() * 150 + 94);
        backGroundTopCarousel[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
}