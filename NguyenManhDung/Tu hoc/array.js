var order;
var quit = false;
var array = [];

while (!quit) {
	order = Number(prompt("What do you want to do? "));
	switch (order) {
		case 0:
			quit = true;
			break;
		case 1: 
			printReverse(getArrayFromUser());
			break;
		case 2:
			console.log(isUniform(getArrayFromUser()));
			break;
		case 3:
			console.log(sumArray(getArrayFromUser()));
			break;
		case 4:
			console.log(max(getArrayFromUser()));
			break;
		default:
			console.log("You must type a number corresponding to the order!");
	}
}

function printReverse(array) {
	for (var i = array.length - 1; i > -1; i--) {
		console.log(array[i]);
	}
	array.length = 0;
}

function getArrayFromUser() {
	var length = prompt("Enter the length of your array: ");
	var element;
	for (var i = 0; i < length; i++) {
		element = prompt("Enter the element has the index of " + i + " : ");
		array.push(element);
	}
	return array;
}

function isUniform(array) {
	for (var i = 0; i < array.length - 1; i++) {
		if (array[i] !== array[i + 1]) {
			array.length = 0;
			return false;
		}
	}
	array.length = 0;
	return true;
}

function sumArray(array) {
	var sum = 0;
	array.forEach(function(element) {
		sum += Number(element);
	});
	array.length = 0;
	return sum;
}

function max(array) {
	var max = Number(array[0]);
	array.forEach(function(element) {
		if (Number(element) > max) max = Number(element); 
	});
	array.length = 0;
	return max;
}