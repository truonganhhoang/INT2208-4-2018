var choices            = document.querySelectorAll(".multipleChoice img"); // multiple choices (question-1)
var choices2           = document.querySelectorAll(".multipleChoice-2"); // multiple choices type 2 (question-3)
var progress           = document.getElementsByClassName("progress-bar")[0]; // progress bar
var rightAnswers1      = document.getElementsByTagName("h4"); // right answers for question-1
var rightAnswers2      = document.querySelectorAll(".question-2 img"); // right answers for question-2 and question-3(converted to 2)
var rightAnswers2_1    = document.querySelectorAll(".question-2 .h4"); // right answers for question-2_1 and question-3(converted to 2)
var rightAnswers1_3    = [];                                           // right answers for question-3(converted to 1)
var rightAnswers1_3_1  = [];                                           // right answers for question-3(converted to 1)
var questions1         = document.getElementsByClassName("question-1"); // question type 1
var questions2         = document.getElementsByClassName("question-2"); // question type 2
var questions3         = document.getElementsByClassName("question-3"); // question type 3
var input              = document.querySelectorAll(".question-2 input"); // answer box for question-2
var homeLink           = document.querySelectorAll("li a")[0]; // home button
var escapeBtn          = document.getElementsByClassName("escape-btn")[0]; // x button
var learningCards      = document.getElementsByClassName("learning"); // learning cards
var soundBtns          = document.getElementsByClassName("sound-btn"); // sound buttons

var isFront = true; // is front side (learning card)
// answer counter (used for counting answer in process)
var countAnswer1 = 0, countAnswer1_1 = 0, countAnswer1_2 = 0;
var countAnswer2 = 0, countAnswer2_1 = 0, countAnswer2_2 = 0;
// used for counting learning cards
var countCards = 0;
// to check correctness when user learn
var checkCorrectness = new Map();
// state of lesson (finished or not)
var finished = false;

main();

function main() {
    // add some style for choices
    if (choices.length === 9) {
        for (i = 0; i < choices.length; i+=3) {
            choices[i].parentElement.classList.add("left");
            choices[i].parentElement.parentElement.classList.add("offset-md-1");
            choices[i + 2].parentElement.classList.add("right");
        }
    } else {
        for (i = 0; i < choices.length; i+=2) {
            choices[i].parentElement.classList.add("left");
            choices[i].parentElement.parentElement.classList.add("offset-md-1");
        }
    }
    // add event for choices
    for (var i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", function () {
            if (countAnswer1 < questions1.length) {
                if (this.getAttribute("alt") === rightAnswers1[countAnswer1_1].textContent.trim()) {
                    updateProgress();
                    // plus 1 grade
                    if (!rightAnswers1[countAnswer1].parentElement.classList.contains("shaking"))
                        checkCorrectness.set(rightAnswers1[countAnswer1].id,
                            [this.src, checkCorrectness.get(rightAnswers1[countAnswer1].id)[1] + 1]);
                    // increase answer counter
                    countAnswer1++;
                    countAnswer1_1++;
                    // move to next question
                    takeQuestion();
                } else {
                    // minus 1 grade
                    if (!rightAnswers1[countAnswer1].parentElement.classList.contains("shaking")) {
                        rightAnswers1[countAnswer1].parentElement.classList.add("shaking");
                        checkCorrectness.set(rightAnswers1[countAnswer1_1].id,
                            [this.getAttribute("about"), checkCorrectness.get(rightAnswers1[countAnswer1_1].id)[1] - 1]);
                    }
                }
                // change opacity of choice
                for (var j = 0; j < choices.length; j++) {
                    if (choices[j].id === this.id) this.style.opacity = "0.4";
                    else choices[j].style.opacity = "1";
                }
            }
        });
        choices[i].addEventListener("mouseover", function () {
            this.style.boxShadow = "0 2px 9px rgba(0,0,0,.7)";
        });
        choices[i].addEventListener("mouseout", function () {
            this.style.boxShadow = "0 2px 9px rgba(0,0,0,.1)";
        })
    }
    // check answers for questions-2
    for (i = 0; i < input.length; i++) {
        input[i].addEventListener("keyup", function (event) {
            if (event.keyCode === 13 && countAnswer2 < questions2.length) { // this line prevent reviewing again when user type false answer
                if ($(this.parentElement.parentElement).find("img").length) {
                    if (this.value.toLowerCase().trim() === rightAnswers2[countAnswer2_1].getAttribute("alt").toLowerCase()) {
                        updateProgress();
                        // plus 1 grade
                        if (this.style.borderBottom !== "2px solid rgb(202, 103, 103)") {
                            checkCorrectness.set(rightAnswers2[countAnswer2_1].id,
                                [rightAnswers2[countAnswer2_1].src, checkCorrectness.get(rightAnswers2[countAnswer2_1].id)[1] + 1]);
                        }
                        // increase answer counter
                        countAnswer2++;
                        countAnswer2_1++;
                        // move to next question
                        takeQuestion();
                    } else {
                        // minus 1 grade
                        if (this.style.borderBottom !== "2px solid rgb(202, 103, 103)") {
                            this.style.borderBottom = "2px solid rgb(202, 103, 103)";
                            this.value = "";
                            this.placeholder = "type \"" + rightAnswers2[countAnswer2_1].alt + "\"";
                            checkCorrectness.set(rightAnswers2[countAnswer2_1].id,
                                [rightAnswers2[countAnswer2_1].src, checkCorrectness.get(rightAnswers2[countAnswer2_1].id)[1] - 1]);
                        }
                    }
                } else {
                    if (this.value.toLowerCase().trim() === rightAnswers2_1[countAnswer2_2].getAttribute("about").toLowerCase()) {
                        updateProgress();
                        // plus 1 grade
                        if (this.style.borderBottom !== "2px solid rgb(202, 103, 103)") {
                            checkCorrectness.set(rightAnswers2_1[countAnswer2_2].id,
                                [rightAnswers2_1[countAnswer2_2].textContent.trim(), checkCorrectness.get(rightAnswers2_1[countAnswer2_2].id)[1] + 1]);
                        }
                        // increase answer counter
                        countAnswer2++;
                        countAnswer2_2++;
                        // move to next question
                        takeQuestion();
                    } else {
                        // minus 1 grade
                        if (this.style.borderBottom !== "2px solid rgb(202, 103, 103)") {
                            this.style.borderBottom = "2px solid rgb(202, 103, 103)";
                            this.value = "";
                            this.placeholder = "type \"" + rightAnswers2_1[countAnswer2_2].getAttribute("about") + "\"";
                            checkCorrectness.set(rightAnswers2_1[countAnswer2_2].id,
                                [rightAnswers2_1[countAnswer2_2].textContent.trim(), checkCorrectness.get(rightAnswers2_1[countAnswer2_2].id)[1] - 1]);
                        }
                    }
                }
            }
        })
    }
    // multiple choice 2 (question type 3) - convert question-3 to question-1 or question-2
    if (!questions1.length) {
        $(questions3).addClass("question-1");
        $(questions3).removeClass("question-3");
        rightAnswers1_3    = document.querySelectorAll(".question-1 img");
        rightAnswers1_3_1  = document.querySelectorAll(".question-1 .h4");
    } else {
        $(questions3).addClass("question-2");
        $(questions3).removeClass("question-3");
        rightAnswers2      = document.querySelectorAll(".question-2 img");
        rightAnswers2_1    = document.querySelectorAll(".question-2 .h4");
    }
    // check answers for questions-3
    $(choices2).click(function () {
        if (this.parentElement.parentElement.classList.contains("question-2")) {
            if ($(this.parentElement.parentElement).find("img").length) {
                // responseToChoice_3(this, rightAnswers2, countAnswer2_1, "alt");
                if (this.innerText.toLowerCase() === rightAnswers2[countAnswer2_1].getAttribute("alt").toLowerCase()) {
                    // plus 1 grade
                    solveRightChoice(this, rightAnswers2, countAnswer2_1, true);
                    countAnswer2++;
                    countAnswer2_1++;
                    // move to next question
                    takeQuestion();
                } else {
                    // minus 1 grade
                    solveFalseChoice(this, rightAnswers2, countAnswer2_1, true);
                }
            } else {
                if (this.innerText.toLowerCase() === rightAnswers2_1[countAnswer2_2].getAttribute("about").toLowerCase()) {
                    // plus 1 grade
                    solveRightChoice(this, rightAnswers2_1, countAnswer2_2, false);
                    countAnswer2++;
                    countAnswer2_2++;
                    // move to next question
                    takeQuestion();
                } else {
                    // minus 1 grade
                    solveFalseChoice(this, rightAnswers2_1, countAnswer2_2, false);
                }
            }
        } else {
            if ($(this.parentElement.parentElement).find("img").length) {
                if (this.innerText.toLowerCase() === rightAnswers1_3[countAnswer1_1].getAttribute("alt").toLowerCase()) {
                    // plus 1 grade
                    solveRightChoice(this, rightAnswers1_3, countAnswer1_1, true);
                    countAnswer1++;
                    countAnswer1_1++;
                    // move to next question
                    takeQuestion();
                } else {
                    // minus 1 grade
                    solveFalseChoice(this, rightAnswers1_3, countAnswer1_1, true);
                }
            } else {
                if (this.innerText.toLowerCase() === rightAnswers1_3_1[countAnswer1_2].getAttribute("about").toLowerCase()) {
                    // plus 1 grade
                    solveRightChoice(this, rightAnswers1_3_1, countAnswer1_2, false);
                    countAnswer1++;
                    countAnswer1_2++;
                    // move to next question
                    takeQuestion();
                } else {
                    // minus 1 grade
                    solveFalseChoice(this, rightAnswers1_3_1, countAnswer1_2, false);
                }
            }
        }
    });

    // quit and redirect to home page
    escapeBtn.addEventListener("click", function () {
        homeLink.click();
    });
    // rotate to the back
    $(learningCards).find(".front").click(function () {
        $(this).parents()[1].classList.add("hover");
        $($(this).parents()[0]).find(".sound-btn").click();
        isFront = !isFront;
    });
    // rotate to the front
    $(learningCards).find(".back > div").click(function () {
        $(this).parents()[2].classList.remove("hover");
        isFront = !isFront;
    });

    for (i = 0; i < learningCards.length; i++) {
        // move to next card
        learningCards[i].children[2].addEventListener("click", function () {
            countCards++;
            nextCard();
        });
    }

    for (i = 0; i < soundBtns.length; i++) {
        // speak the word
        soundBtns[i].addEventListener("click", function () {
            responsiveVoice.speak(this.parentElement.children[1].textContent, "UK English Male");
            console.clear();
        })
    }

    // main events are added above, definitions are below

    nextCard();
    // set time out after finishing lesson
    setInterval(function () {
        if (countAnswer2 === (rightAnswers2.length + rightAnswers2_1.length)
            && countAnswer1 === (rightAnswers1.length + rightAnswers1_3.length + rightAnswers1_3_1.length )) finished = true;
    }, 2000);
}

// move to next type of question
function nextQuestion(questions_1, questions_2, countAnswer_1, countAnswer_2) {
    for (var i = 0; i < questions_1.length; i++) {
        if (i === countAnswer_1) {
            if (questions_1[i].classList.contains("question-1") &&  rightAnswers1.length) rightAnswers1[i].parentElement.children[0].click();
            questions_1[i].classList.remove("d-none");
            if (countAnswer_2 > 0) questions_2[countAnswer_2 - 1].classList.add("d-none");
        }
        else questions_1[i].classList.add("d-none");
    }
}

// move to next card or take question randomly when countCards = 2 and no question has been displayed
function nextCard() {
    if (countCards === 2 && (countAnswer1 + countAnswer2) === 0) {
        learningCards[countCards - 1].classList.add("d-none");
        return takeQuestion();
    }
    for (var i = 0; i < learningCards.length; i++) {
        if (i === countCards) {
            pushCardToCheck(i);
            isFront = true;
            learningCards[i].classList.remove("d-none");
            if (countCards === 2) {
                if (questions1[0]) questions1[0].classList.add("d-none");
                if (questions1[1]) questions1[1].classList.add("d-none");
                if (questions2[0]) questions2[0].classList.add("d-none");
                if (questions2[1]) questions2[1].classList.add("d-none");
            } // hide the question before showing the final card
        } else learningCards[i].classList.add("d-none");
    }
    if (countCards === learningCards.length) takeQuestion();
}

// take question for user or take card
function takeQuestion() {
    // take card
    if ((countAnswer1 + countAnswer2) === 2 && countCards === 2 && learningCards.length > 2) {
        return nextCard();
    }
    // take question
    if (randomQuestion() === 1 && countAnswer1 < questions1.length) nextQuestion(questions1, questions2, countAnswer1, countAnswer2);
    else if (countAnswer2 < questions2.length) nextQuestion(questions2, questions1, countAnswer2, countAnswer1);
    else nextQuestion(questions1, questions2, countAnswer1, countAnswer2);
}

// random type of questions
function randomQuestion() {
    return Math.floor(Math.random() * 2 + 1);
}

// solve right choice for multiple answers type 2 (question-3)
function solveRightChoice(choice, rightAnswers, countAnswer, haveImage) {
    updateProgress();
    if (haveImage) {
        if (!rightAnswers[countAnswer].classList.contains("shaking")) {
            checkCorrectness.set(rightAnswers[countAnswer].id,
                [rightAnswers[countAnswer].src, checkCorrectness.get(rightAnswers[countAnswer].id)[1] + 1]);
        }
    } else {
        if (!rightAnswers[countAnswer].classList.contains("shaking")) {
            checkCorrectness.set(rightAnswers[countAnswer].id,
                [rightAnswers[countAnswer].textContent.trim(), checkCorrectness.get(rightAnswers[countAnswer].id)[1] + 1]);
        }
    }
}


// solve false choice for multiple answers type 2 (question-3)
function solveFalseChoice(choice, rightAnswers, countAnswer, haveImage) {
    if (haveImage) {
        if (!rightAnswers[countAnswer].classList.contains("shaking")) {
            rightAnswers[countAnswer].classList.add("shaking");
            checkCorrectness.set(rightAnswers[countAnswer].id,
                [rightAnswers[countAnswer].src, checkCorrectness.get(rightAnswers[countAnswer].id)[1] - 1]);
        }
    } else {
        if (!rightAnswers[countAnswer].classList.contains("shaking")) {
            rightAnswers[countAnswer].classList.add("shaking");
            checkCorrectness.set(rightAnswers[countAnswer].id,
                [rightAnswers[countAnswer].textContent.trim(), checkCorrectness.get(rightAnswers[countAnswer].id)[1] - 1]);
        }
    }
    for (var j = 0; j < choices2.length; j++) {
        if (choices2[j].id === choice.id) {
            choice.disabled = true;
            $(choice).css({
                borderColor: "#ca6767",
                color: "#ca6767",
                opacity: "0.4"
            });
        }
        else {
            choices2[j].disabled = false;
            $(choices2[j]).css({
                borderColor: "#89e4ff",
                color: "#32cdff",
                opacity: "1"
            });
        }
    }
}

// update progress learning
function updateProgress() {
    progress.style.width = (String)((100 / (rightAnswers1_3_1.length + rightAnswers1_3.length +
        rightAnswers2_1.length + rightAnswers2.length +
        rightAnswers1.length)) *
        (countAnswer1 + countAnswer2 + 1) + "%");
}

// push cards to a map data structure to check correctness
function pushCardToCheck(i) {
    if (!$(learningCards[i]).find(".front .h4").length) {
        var key = $(learningCards[i]).find(".front img")[0].id;
        checkCorrectness.set(key, [$(learningCards[i]).find(".front img")[0].src, correctTime[i]]);
    } else {
        key = $(learningCards[i]).find(".front .h4")[0].id;
        checkCorrectness.set(key, [$(learningCards[i]).find(".front .h4")[0].textContent.trim(), correctTime[i]]);
    }
}