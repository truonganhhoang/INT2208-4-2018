var answer = prompt("Are we there yet?");
while (true) {
	if (answer.includes("yeah") || answer.includes("yes")) break;
	answer = prompt("Are we there yet?");
}
alert("Yeah!! We made it!");