var button = document.querySelector("button");
var isChanged = false;

// button.addEventListener("click", function () {
//     if (isChanged) document.body.style.background = "white";
//     else document.body.style.background = "purple";

//     isChanged = !isChanged;
// })

button.addEventListener("click", function (){
	document.body.classList.toggle("purple");
});