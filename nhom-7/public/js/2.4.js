var choices = document.querySelectorAll(".multipleChoice img"); // multiple choices
var progress = document.getElementsByClassName("progress-bar")[0]; // progress bar
var rightAnswers1 = document.getElementsByTagName("h4"); // right answers for question-1
var rightAnswers2 = document.querySelectorAll(".question-2 img"); // right answers for question-2
var questions1 = document.getElementsByClassName("question-1"); // question type 1
var questions2 = document.getElementsByClassName("question-2"); // question type 2
var input = document.querySelectorAll(".question-2 input"); // answer box for question-2
var homeLink = document.querySelectorAll("li a")[1]; // home button
var escapeBtn = document.getElementsByClassName("escape-btn")[0]; // x button
var learningCards = document.getElementsByClassName("learning"); // learning cards
var soundBtns = document.getElementsByClassName("sound-btn"); // sound buttons
var isFront = true; // is front side (learning card)
// answer counter (used for counting answer in process)
var countAnswer1 = 0;
var countAnswer2 = 0;
// used for counting learning cards
var countCards = 0;
// trial
var sounds = [{
    name: "nose",
    sound: new Audio("https://dictionary.cambridge.org/media/english/us_pron/n/noe/noes_/noes.mp3")
}, {
    name: "trunk",
    sound: new Audio("https://dictionary.cambridge.org/media/english/us_pron/t/tru/trunk/trunk.mp3")
},{
    name: "head",
    sound: new Audio("https://dictionary.cambridge.org/media/english/us_pron/h/hea/head_/head.mp3")
}];

main();

function main() {
    // add event for choices
    for (var i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", function () {
            if (countAnswer1 < questions1.length) {
                if (this.getAttribute("alt") === rightAnswers1[countAnswer1].textContent) {
                    progress.style.width = (String)((100 / (rightAnswers2.length + rightAnswers1.length)) * (countAnswer1 + countAnswer2 + 1) + "%");
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
    // add event for input
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("keyup", function (event) {
            if (event.keyCode === 13 && countAnswer2 < questions2.length) {
                if (this.value === rightAnswers2[countAnswer2].getAttribute("alt")) {
                    progress.style.width = (String)((100 / (rightAnswers2.length + rightAnswers1.length)) * (countAnswer1 + countAnswer2 + 1) + "%");
                    countAnswer2++;
                    // move to next question
                    takeQuestion();
                } else {
                    this.style.borderBottom = "2px solid #ca6767";
                }
            }
        })
    }
    // add event for escape button
    escapeBtn.addEventListener("click", function () {
        homeLink.click();
    });
    // add event for learning cards
    for (var i = 0; i < learningCards.length; i++) {
        learningCards[i].children[1].addEventListener("click", function () {
            if (isFront) {
                this.children[1].children[0].click();
                this.style.transform = "rotateY(180deg)";
            } else {
                this.style.transform = "rotateY(0deg)";
            }
            this.children[0].classList.toggle("d-none");
            this.children[1].classList.toggle("d-none");
            isFront = !isFront;
        });
        // add event for continue-button
        learningCards[i].children[2].addEventListener("click", function () {
            countCards++;
            nextCard();
        });
    }
    // add event for sound buttons
    for (var i = 0; i < soundBtns.length; i++) {
        soundBtns[i].addEventListener("click", function () {
            // search matched sound
            for (var i = 0; i < sounds.length; i++) {
                if (this.parentElement.children[1].textContent === sounds[i].name) {
                    sounds[i].sound.play();
                }
            }
            this.parentElement.parentElement.click();
        })
    }

    // events are added above, execution are below

    nextCard();
    // set time out after finishing lesson
    setInterval(function () {
        if (countAnswer2 === rightAnswers2.length && countAnswer1 === rightAnswers1.length) homeLink.click();
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
