const add = document.querySelector("#addBtn");
const taskInput = document.querySelector("#myInput");
const list = document.querySelector("#myUL");

loadEventListeners();


function loadEventListeners() {
    add.addEventListener("click",addTask);
    list.addEventListener("click", removeTask);
    list.addEventListener("click", doneTask);
}

function addTask() {
    if (taskInput.value === '') {
        alert("Dodajte zadatak");
    }

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = "close";
    link.innerHTML = '\u00D7';
    li.appendChild(link);

    list.appendChild(li);
    taskInput.value = "";

}
function removeTask(e) {
    if (e.target.classList.contains("close")) {

        if (confirm("Da li ste sigurni da zelite da obrisete")) {}
        e.target.parentElement.remove();
    }
}
function doneTask(e) {
    if (e.target = 'li') {
        e.target.classList.add("checked");  
    }
}


