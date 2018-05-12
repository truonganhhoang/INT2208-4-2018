var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var age = prompt("What's your age?");

console.log("Your full name is " + firstName + " " + lastName);
console.log("You are " + age + " years old");
alert("You've lived for " + (365 * age) + " days");

if (age < 0) {
	console.log("Wrong age!");
}

if (age == 21) {
	console.log("Happy 21st birthday!!");
}

if (age % 2 == 1) {
	console.log("Your age is odd!");
}
