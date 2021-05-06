// Get to-dos from user
function get_todos() {
    "use strict";
    var todos = new Array;
    var todos_str = localStorage.getItem("todo");
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// Add to-dos to already existing list
function add() {
    "use strict";
    var task = document.getElementById("task").value;

    var todos = get_todos();
    todos.push("task");
    localStorage.setItem("todo", JSON.stringify(todos));
    
    show();
    
    return false;
}

// Clear any input left around after adding a task
function clearDefault(a) {
    if (a.defaultValue == a.value) {a.value = ""}
}

// Remove any item the user doesn't need
function remove() {
    var id = this.getAttribute("id");
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem("todo", JSON.stringify(todos));

    show();

    return false;
}

// Display current To-do list
function show() {
    "use strict"; var todos = get_todos();

    var html = "<ul>";
    for (var i = 0; i<todos.length; i++) {
        html += "<li>" + todos[i] + '<button class = "remove" id ="' + i + '">Delete</button></li>';
    }
    html += "</ul>";

    document.getElementById("todos").innerHTML = html;

    var buttons = document.getElementsByClassName("remove");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", remove);
    }
}

document.getElementById("add").addEventListener("click", add);
show();
