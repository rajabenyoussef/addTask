function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input));
        ul.appendChild(li);
        document.getElementById("taskInput").value = "";
    }
}