let checkList = document.getElementById("todoList");
let checkListValues = document.getElementsByName("todo");
let newItem = document.getElementById("inputValue");


document.getElementById("addButton").addEventListener("click", function(event) {
	event.preventDefault();
	let input = document.createElement("div")
	input.className = "listOfTodos"
	input.innerHTML = `<input type="checkbox" name="todo"> ` + newItem.value;
	checkList.appendChild(input);
	newItem.value = "";
});

let modifyAll = function(state) {
	checkListValues.forEach( function(element) {
		element.checked = state;
	});
}

let deleteAll = function() {
	while(checkList.firstChild) {
		checkList.removeChild(checkList.firstChild);
	}
}