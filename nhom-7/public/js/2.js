var imageFlowCard = $('.img-ad-card');
var deckTitle = $('.deck-title');
var userBar = $(".nav")[0];
var authorDeck = $("p.author");
var backGroundTopCarousel = $(".row.position-relative");
var trendingDecks = $(".trending-deck");
var secondCarousel = $("#second-carousel");
var thirdCarousel = $("#third-carousel");

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
    // first carousel
    $("#first-carousel").children()[0].classList.add("active");
    // second carousel
    $(secondCarousel).children()[0].classList.add("active", "scroll");
    if ($(secondCarousel).children().length < 2) {
        $(secondCarousel).siblings().addClass("d-none");
    } else $(secondCarousel).siblings().remove("d-none");
    // third carousel
    if ($(thirdCarousel).children().length) $(thirdCarousel).children()[0].classList.add("active", "scroll");
        if ($(thirdCarousel).children().length < 2) {
        $(thirdCarousel).siblings().addClass("d-none");
    } else $(thirdCarousel).siblings().remove("d-none");
    $("#carousel-2").carousel({
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
    if (($(window).width() < 559)) {
        for (i = 0; i < trendingDecks.length; i++) {
            trendingDecks[i].parentElement.style.height = "134px";
        }
        for (i = 0; i < authorDeck.length; i++) {
            // the carousel elements
            authorDeck[i].style.fontSize = "13px";
            deckTitle[i].children[0].classList.add("h5");
            deckTitle[i].style.maxWidth = "50%";
            changeFlowItemToFitSmallWindow(i)
        }
        // nav bar
        removeAbsolutePosition();
        userBar.style.width = "100%";
        for (i = 0; i < userBar.children.length; i++) {
            userBar.children[i].style.width = String($(window).width() / 4) + "px";
        }
    } else if (($(window).width() < 700)) {
        // nav bar
        spreadNavBar();
        removeAbsolutePosition();
        for (i = 0; i < trendingDecks.length; i++) {
            trendingDecks[i].parentElement.style.height = "134px";
        }
        for (i = 0; i < userBar.children.length; i++) {
            userBar.children[i].style.width = "";
        }
        // carousel
        for (i = 0; i < authorDeck.length; i++) {
            spreadCarousel(i);
            changeFlowItemToFitSmallWindow(i)
        }
    } else if ($(window).width() < 977) {
        for (i = 0; i < trendingDecks.length; i++) {
            trendingDecks[i].parentElement.style.height = "134px";
        }
        // nav bar
        spreadNavBar();
        userBar.classList.add("position-absolute");
        userBar.style.right = "-80px";
        // carousel
        for (i = 0; i < imageFlowCard.length; i++) {
            spreadCarousel(i);
            changeFlowItemToFitSmallWindow(i);
        }
    } else if ($(window).width() < 1200) {
        // trending decks
        for (i = 0; i < trendingDecks.length; i++) {
            trendingDecks[i].parentElement.style.height = "134px";
        }
        // navbar
        spreadNavBar();
        removeAbsolutePosition();
        for (var i = 0; i < imageFlowCard.length; i++) {
            // carousel
            spreadCarousel(i);
            changeFlowItemToFitLargeWindow(i);
        }
    } else {
        // navbar
        spreadNavBar();
        removeAbsolutePosition();
        for (i = 0; i < trendingDecks.length; i++) {
            trendingDecks[i].parentElement.style.height = "166px";
        }
        for (i = 0; i < imageFlowCard.length; i++) {
            // carousel
            spreadCarousel(i);
            changeFlowItemToFitLargeWindow(i);
        }
    }
}

function randomColor() {
    var red, green, blue;
    for (var i  = 0; i < backGroundTopCarousel.length; i++) {
        red = Math.floor(Math.random() * 244);
        green = Math.floor(Math.random() * 180);
        blue = Math.floor(Math.random() * 150);
        backGroundTopCarousel[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    }
}

// change the top carousel items to fit the small window size
function changeFlowItemToFitSmallWindow(i) {
    deckTitle[i].style.left = "40px";
    deckTitle[i].style.maxWidth = "50%";
    imageFlowCard[i].style.width = "116px";
    imageFlowCard[i].style.height = "140px";
    imageFlowCard[i].style.right = "25px";
    imageFlowCard[i].style.top = "40px";
}

// change the top carousel items to fit the small window size
function changeFlowItemToFitLargeWindow(i) {
    deckTitle[i].style.left = "60px";
    imageFlowCard[i].style.width = "144px";
    imageFlowCard[i].style.height = "166px";
    imageFlowCard[i].style.right = "60px";
    imageFlowCard[i].style.top = "30px";
    deckTitle[i].style.maxWidth = "50%";

}

// set nav bar back fit bigger size (> 576px)
function spreadNavBar() {
    for (i = 0; i < userBar.children.length; i++) {
        userBar.children[i].style.width = "";
    }
    userBar.style.width = "";
}

// remove absolute position for nav bar
function removeAbsolutePosition() {
    userBar.classList.remove("position-absolute");
    userBar.style.right = "0px";
}

// change carousel elements fit the bigger window size
function spreadCarousel(i) {
    authorDeck[i].style.fontSize = "15px";
    deckTitle[i].children[0].classList.remove("h5");
    deckTitle[i].style.maxWidth = "50%";
}