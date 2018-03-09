var choices = document.querySelectorAll(".multipleChoice a img");
var progress = document.getElementsByClassName("progress-bar")[0];

main();

function main() {
    for (var i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", function () {
            if (this.getAttribute("alt") === "trunk") {
                progress.style.width = "33%";
            } else {
                // thinking
            }
        })
    }
}