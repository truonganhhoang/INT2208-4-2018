var choices = document.querySelectorAll(".multipleChoice a img");
var progress = document.getElementsByClassName("progress-bar")[0];
var rightAnswers1 = document.getElementsByTagName("h4");
var rightAnswers2 = document.querySelectorAll(".question-2 img");
var questions1 = document.getElementsByClassName("question-1");
var questions2 = document.getElementsByClassName("question-2");
var input = document.querySelectorAll(".question-2 input");
var homeLink = document.querySelectorAll("li a")[1];
var escapeBtn = document.getElementsByClassName("escape-btn")[0];
// answer counter
var countAnswer1 = 0;
var countAnswer2 = 0;

main();

function main() {
    takeQuestion();
    // set time out after finishing lesson
    setInterval(function () {
        if (countAnswer2 == 3 && countAnswer1 == 3) homeLink.click();
    }, 2500)
    // add event listeners for choices
    for (var i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", function () {
            if (countAnswer1 < questions1.length) {
                if (this.getAttribute("alt") === rightAnswers1[countAnswer1].textContent) {
                    progress.style.width = (String)("16.67" * (countAnswer1 + countAnswer2 + 1) + "%");
                    countAnswer1++;
                    // move to next question
                    takeQuestion();
                } else {
                    rightAnswers1[countAnswer1].parentNode.classList.add("shaking");
                }
                // change opacity of choice
                for (var i = 0; i < choices.length; i++) {
                    if (choices[i].id == this.id) this.style.opacity = "0.4";
                    else choices[i].style.opacity = "1";
                }
            }
        })
        choices[i].addEventListener("mouseover", function () {
            this.style.boxShadow = "0 2px 9px rgba(0,0,0,.7)";
        })
        choices[i].addEventListener("mouseout", function () {
            this.style.boxShadow = "0 2px 9px rgba(0,0,0,.1)";
        })
    }
    // add event listeners for input
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("keyup", function (event) {
            if (event.keyCode == 13 && countAnswer2 < questions2.length) {
                if (this.value === rightAnswers2[countAnswer2].getAttribute("alt")) {
                    progress.style.width = (String)("16.67" * (countAnswer1 + countAnswer2 + 1) + "%");
                    countAnswer2++;
                    // move to next question
                    takeQuestion();
                } else {
                    this.style.borderBottom = "2px solid #ca6767";
                }
            }
        })
    }
    // add event listener for escape button 
    escapeBtn.addEventListener("click", function () {
        homeLink.click();
    })
}

// move to next type of question
function nextQuestion(questions_1, questions_2, countAnswer_1, countAnswer_2) {
    for (var i = 0; i < questions_1.length; i++) {
        if (i == countAnswer_1) {
            questions_1[i].classList.remove("d-none");
            if (countAnswer_2 > 0) questions_2[countAnswer_2 - 1].classList.add("d-none");
        }
        else questions_1[i].classList.add("d-none");
    }
}

// take question for user
function takeQuestion() {
    if (randomQuestion() == 1 && countAnswer1 < questions1.length) nextQuestion(questions1, questions2, countAnswer1, countAnswer2);
    else if (countAnswer2 < questions2.length) nextQuestion(questions2, questions1, countAnswer2, countAnswer1);
    else nextQuestion(questions1, questions2, countAnswer1, countAnswer2);
}

// random type of questions
function randomQuestion() {
    return Math.floor(Math.random() * 2 + 1);
}