//your code here

let addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", function() {
    let todoText = document.getElementById("newTodoInput").value;
    if (todoText != "") {
        let li = document.createElement("li");
        li.innerHTML = todoText;
        document.getElementById("todoList").appendChild(li);
        document.getElementById("newTodoInput").value = "";
    }
})