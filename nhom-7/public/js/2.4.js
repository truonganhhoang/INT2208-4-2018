var choices         = document.querySelectorAll(".multipleChoice img"); // multiple choices
var progress        = document.getElementsByClassName("progress-bar")[0]; // progress bar
var rightAnswers1   = document.getElementsByTagName("h4"); // right answers for question-1
var rightAnswers2   = document.querySelectorAll(".question-2 img"); // right answers for question-2
var rightAnswers2_1 = document.querySelectorAll(".question-2 .h4"); // right answers for question-2_1
var questions1      = document.getElementsByClassName("question-1"); // question type 1
var questions2      = document.getElementsByClassName("question-2"); // question type 2
var input           = document.querySelectorAll(".question-2 input"); // answer box for question-2
var homeLink        = document.querySelectorAll("li a")[0]; // home button
var escapeBtn       = document.getElementsByClassName("escape-btn")[0]; // x button
var learningCards   = document.getElementsByClassName("learning"); // learning cards
var soundBtns       = document.getElementsByClassName("sound-btn"); // sound buttons

var isFront = true; // is front side (learning card)
// answer counter (used for counting answer in process)
var countAnswer1 = 0;
var countAnswer2 = 0;
// used for counting learning cards
var countCards = 0;

main();

function main() {
    // add some style for choices
    if (choices.length === 9) {
        for (i = 0; i < choices.length; i+=3) {
            choices[i].parentElement.classList.add("left");
            choices[i].parentElement.parentElement.classList.add("ml-5");
            choices[i + 2].parentElement.classList.add("right");
        }
    } else {
        for (i = 0; i < choices.length; i+=2) {
            choices[i].parentElement.classList.add("left");
            choices[i].parentElement.parentElement.classList.add("ml-5");
        }
    }
    // add event for choices
    for (var i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", function () {
            if (countAnswer1 < questions1.length) {
                if (this.getAttribute("alt") === rightAnswers1[countAnswer1].textContent) {
                    progress.style.width = (String)((100 / (rightAnswers2_1.length + rightAnswers2.length + rightAnswers1.length)) * (countAnswer1 + countAnswer2 + 1) + "%");
                    countAnswer1++;
                    // move to next question
                    takeQuestion();
                } else {
                    rightAnswers1[countAnswer1].parentElement.classList.add("shaking");
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
    // question type text in - if it's short
    // fix
    for (i = 0; i < input.length; i++) {
        input[i].addEventListener("keyup", function (event) {
            if (event.keyCode === 13 && countAnswer2 < questions2.length) {
                if (rightAnswers2.length) {
                    if (this.value.toLowerCase() === rightAnswers2[countAnswer2].getAttribute("alt").toLowerCase()) {
                        progress.style.width = (String)((100 / (rightAnswers2_1.length + rightAnswers2.length + rightAnswers1.length)) * (countAnswer1 + countAnswer2 + 1) + "%");
                        countAnswer2++;
                        // move to next question
                        takeQuestion();
                    } else {
                        this.style.borderBottom = "2px solid #ca6767";
                    }
                } else {
                    if (this.value.toLowerCase() === rightAnswers2_1[countAnswer2].title.toLowerCase()) {
                        progress.style.width = (String)((100 / (rightAnswers2_1.length + rightAnswers2.length + rightAnswers1.length)) * (countAnswer1 + countAnswer2 + 1) + "%");
                        countAnswer2++;
                        // move to next question
                        takeQuestion();
                    } else {
                        this.style.borderBottom = "2px solid #ca6767";
                    }
                }
            }
        })
    }
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
        // speak the word if it's short, on the contrary -> don't
        // fix
        soundBtns[i].addEventListener("click", function () {
            responsiveVoice.speak(this.parentElement.children[1].textContent, "UK English Male");
            console.clear();
        })
    }

    // events are added above, execution are below

    nextCard();
    // set time out after finishing lesson
    setInterval(function () {
        if (countAnswer2 === (rightAnswers2.length + rightAnswers2_1.length) && countAnswer1 === rightAnswers1.length) homeLink.click();
    }, 2500);
}

// move to next type of question
function nextQuestion(questions_1, questions_2, countAnswer_1, countAnswer_2) {
    for (var i = 0; i < questions_1.length; i++) {
        if (i === countAnswer_1) {
            if (questions_1[i].classList.contains("question-1")) rightAnswers1[i].parentElement.children[0].click();
            questions_1[i].classList.remove("d-none");
            if (countAnswer_2 > 0) questions_2[countAnswer_2 - 1].classList.add("d-none");
        }
        else questions_1[i].classList.add("d-none");
    }
}

// move to next card
// or take question randomly using currentCard variable to check the range of question
function nextCard() {
    for (var i = 0; i < learningCards.length; i++) {
        if (i === countCards) {
            isFront = true;
            learningCards[i].classList.remove("d-none");
        } else learningCards[i].classList.add("d-none");
    }
    if (countCards === learningCards.length) takeQuestion();
}

// take question for user
function takeQuestion() {
    if (randomQuestion() === 1 && countAnswer1 < questions1.length) nextQuestion(questions1, questions2, countAnswer1, countAnswer2);
    else if (countAnswer2 < questions2.length) nextQuestion(questions2, questions1, countAnswer2, countAnswer1);
    else nextQuestion(questions1, questions2, countAnswer1, countAnswer2);
}

// random type of questions
function randomQuestion() {
    return Math.floor(Math.random() * 2 + 1);
}