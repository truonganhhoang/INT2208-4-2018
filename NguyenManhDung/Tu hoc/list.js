var quit = false;
var order;
var lists = [];
var item;
var index;

while (!quit) {
	order = prompt("What do you want to do?");
	switch (order) {
		case "new":
			addTodo();
			break;
		case "list":
			listTodos();
			break;
		case "delete":
			deleteTodo();
			break;
		case "quit":
			quitApp();
			break;
		default: 
			console.log("Wrong command!");
	}
}

function addTodo() {
	item = prompt("Enter new todo: ");
	lists.push(item);
	console.log(item + " has been added to the list!");
}

function listTodos() {
	console.log("**********");
	for (var i = 0; i < lists.length; i++) {
		console.log(i + ": " + lists[i]);
	}
	console.log("**********");
}

function deleteTodo() {
	index = Number(prompt("Enter the index of todo you want to delete: "));
	if (index >= 0 && index < lists.length) {
		lists.splice(index, 1);
		console.log("Todo is removed!");
	}
}

function quitApp() {
	quit = true;
	console.log("OK! You quit the App!");
}