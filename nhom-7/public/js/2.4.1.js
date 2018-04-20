var userBar = $(".nav")[0];

main1();

function main1() {
    changeToFit();
    checkWindowSize();
    $(window).resize(function () {
        changeToFit();
        checkWindowSize();
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
        for (i = 0; i < userBar.children.length; i++) {
            userBar.children[i].style.width = "";
        }
    } else if ($(window).width() < 977) {
        // nav bar
        spreadNavBar();
        userBar.classList.add("position-absolute");
        userBar.style.right = "-80px";
    } else if ($(window).width() < 1200) {
        // navbar
        spreadNavBar();
        removeAbsolutePosition();
    } else {
        // navbar
        spreadNavBar();
        removeAbsolutePosition();
    }
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