var p = document.querySelector("p");
var input = document.querySelector("input");
var playerOne = document.getElementsByTagName("button")[0];
var playerTwo = document.getElementsByTagName("button")[1];
var reset = document.getElementsByTagName("button")[2];
var firstScore = document.getElementsByTagName("span")[0]; // player one's score
var secondScore = document.getElementsByTagName("span")[1]; // player two's score
var maxScore = 7; // default max score
var valueOfFirstScore = Number(firstScore.textContent);
var valueOfSecondScore = Number(secondScore.textContent);
var isGameOver = false;

playerOne.addEventListener("click", function () {
    if (valueOfFirstScore < maxScore && valueOfSecondScore < maxScore &&
        !isGameOver) {
        valueOfFirstScore++;
        firstScore.textContent = valueOfFirstScore;
        if (valueOfFirstScore === maxScore) {
            firstScore.classList.add("green");
            isGameOver = true;
        }
    }
});

playerTwo.addEventListener("click", function () {
    if (valueOfFirstScore < maxScore && valueOfSecondScore < maxScore &&
        !isGameOver) {
        valueOfSecondScore++;
        secondScore.textContent = valueOfSecondScore;
        if (valueOfSecondScore === maxScore) {
            secondScore.classList.add("green");
            isGameOver = true;
        }
    }
});

reset.addEventListener("click", function () {
    valueOfFirstScore = valueOfSecondScore = 0;
    firstScore.textContent = secondScore.textContent = 0;
    firstScore.classList.remove("green");
    secondScore.classList.remove("green");
    isGameOver = false;
});

input.addEventListener("change", function () {
    if (Number(this.value) > 0) {
        maxScore = Number(this.value);
        p.textContent = "Playing to: " + maxScore;
        reset.click();
    }
});