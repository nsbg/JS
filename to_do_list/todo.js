// 대소문자 오타 신경쓸 것

const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDos';

let toDos = [];
let newID = 0;

function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);

    const cleanToDo = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDo;
    
    saveToDo();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    newID += 1;
    li.id = newID;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newID
    };

    toDos.push(toDoObj);
    
    saveToDo();
} 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""
}

function loadToDo(){
    const loadedToDo = localStorage.getItem(TODO_LS);
    if (loadedToDo !== null) {
        const parsedToDoS = JSON.parse(loadedToDo);
        parsedToDoS.forEach(function(toDo) {
                paintToDo(toDo.text);
        });    
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();