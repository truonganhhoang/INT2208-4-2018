var userBar          = $(".nav")[0];
var inputAnswers     = $(".question-2 input");
var cardsRow         = $(".question-1");
var multipleChoice_2 = $(".multipleChoice-2");

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
        $("#learning-content").removeClass("container mt-5");
    } else $("#learning-content").addClass("container mt-5")
}

// change nav-bar, deck-title font-size and image size according to screen size
function changeToFit() { //fix
    if (($(window).width() < 559)) {
        // nav bar
        removeAbsolutePosition();
        userBar.style.width = "100%";
        for (var i = 0; i < userBar.children.length; i++) {
            userBar.children[i].style.width = String($(window).width() / 4) + "px";
        }
        // input type question
        changeInputAnswerSize_Small(95);
        // cards in a row in question-1
        changeCardsSize_Small(60, 75);
        // multiple choice 2
        changeMultipleChoiceSize(100);
    } else if (($(window).width() < 700)) {
        // nav bar
        spreadNavBar();
        removeAbsolutePosition();
        for (i = 0; i < userBar.children.length; i++) {
            userBar.children[i].style.width = "";
        }
        // input type question
        changeInputAnswerSize_Small(65);
        // cards in a row in question-1
        changeCardsSize_Small(60, 75);
        // multiple choice 2
        changeMultipleChoiceSize(75);
    } else if ($(window).width() < 977) {
        // nav bar
        spreadNavBar();
        userBar.classList.add("position-absolute");
        userBar.style.right = "-80px";
        // input type question
        changeInputAnswerSize_Small(57);
        // cards in a row in question-1
        changeCardsSize_Small(60, 75);
        // multiple choice 2
        changeMultipleChoiceSize(60);
    }
    else if ($(window).width() < 1183) {
        // navbar
        spreadNavBar();
        removeAbsolutePosition();
        // input type question
        changeInputAnswerSize_Big(85);
        // cards in a row in question-1
        changeCardsSize_Big(75, 60);
        // multiple choice 2
        changeMultipleChoiceSize(75);
    }
    else {
        // navbar
        spreadNavBar();
        removeAbsolutePosition();
        // input type question
        changeInputAnswerSize_Big(85);
        // cards in a row in question-1
        changeCardsSize_Big(60, 75);
        // multiple choice 2
        changeMultipleChoiceSize(75);
    }
}

// set nav bar back fit bigger size (> 576px)
function spreadNavBar() {
    for (var i = 0; i < userBar.children.length; i++) {
        userBar.children[i].style.width = "";
    }
    userBar.style.width = "";
}

// remove absolute position for nav bar
function removeAbsolutePosition() {
    userBar.classList.remove("position-absolute");
    userBar.style.right = "0px";
}

// change input box answer size fit smaller window size
function changeInputAnswerSize_Small(size) {
    for (var i = 0; i < inputAnswers.length; i++) {
        inputAnswers[i].parentElement.style.width = size + "%";
        inputAnswers[i].style.width = "100%";
        inputAnswers[i].parentElement.parentElement.classList.remove("row");
        inputAnswers[i].classList.add("mt-4");
    }
}

// change input box answer size fit bigger window size
function changeInputAnswerSize_Big(size) {
    for (var i = 0; i < inputAnswers.length; i++) {
        inputAnswers[i].style.width = size + "%";
        inputAnswers[i].parentElement.parentElement.classList.add("row");
        inputAnswers[i].classList.remove("mt-4");
    }
}

// change cards' size fit big window size
function changeCardsSize_Big(oldSize, newSize) {
    if ($(cardsRow).find(".r-0").length) {
        $(cardsRow).addClass("row");
        for (var i = 0; i < cardsRow.length; i++) {
            if ($(".question-1 .r-" + i).parent()[0].nodeName === "DIV" && $(".question-1 .r-" + i).parent()[0].className === 'row') {
                $(".question-1 .r-" + i).unwrap();
            }
        }
        for (i = 0; i < $(".question-1 .multipleChoice").length && $(".question-1 .multipleChoice")[i].style.height === (oldSize + "%"); i++) {
            $(".question-1 .multipleChoice")[i].style.height = newSize + "%";
        }
    }
}

// change cards' size fit small window size
function changeCardsSize_Small(oldSize, newSize) {
    if ($(cardsRow).find(".r-0").length) {
        $(cardsRow).removeClass("row");
        for (var i = 0; i < cardsRow.length; i++) {
            if (!$(".question-1 .r-" + i).parent()[0].classList.contains("row")) {
                $(".question-1 .r-" + i).wrapAll("<div class='row'></div>");
            }
        }
        for (i = 0; i < $(".question-1 .multipleChoice").length && $(".question-1 .multipleChoice")[i].style.height === (oldSize + "%"); i++) {
            $(".question-1 .multipleChoice")[i].style.height = newSize + "%";
        }
    }
}

// change multiple choice type 2 fit the window size
function changeMultipleChoiceSize(size) {
    for (var i = 0; i < multipleChoice_2.length; i++) {
        multipleChoice_2[i].style.width = size +"%";
    }
}