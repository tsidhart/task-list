var tasks = []
var objtask = {}

window.onload = function(){
    // Call this function
    //taskList();
    var form = document.querySelector("form");
    form.onsubmit = listBuilder;
}

// Form submit handler
function listBuilder(){
    event.preventDefault();
    var form = document.querySelector("form");
    var parent = document.getElementById("list-container")
    var ul = document.createElement("ul")
    var li = document.createElement("li")
    li.innerHTML = form.taskdes.value
    ul.appendChild(li)
    parent.appendChild(ul)

    objtask = {
      person: form.handler.value,
      difficulty: form.difficulty.value,
      taskdes: form.taskdes.value
    }
    tasks.push(objtask)
}
