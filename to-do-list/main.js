let taskId = 0
const taskKey = 'tasks'

const createTaskDiv = (inputValue, id) => {

    const task_el = document.createElement("div");
    task_el.classList.add("task");
    task_el.id = id

    const task_el_content = document.createElement("div");
    task_el_content.classList.add("content");

    task_el.appendChild(task_el_content);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = inputValue;

    task_input_el.setAttribute("readonly", "readonly");

    task_el_content.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML="Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML="delete";

    task_el.appendChild(task_actions_el);
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
        }
        else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "Edit";
        }
    });

    task_delete_el.addEventListener('click', () => {
        list_el.removeChild(task_el);
    });

    return task_el
}

/*
    'taskId': {
        0: 'my todo 1',
        1: 'my todo 2'
    }
*/
const fetchTodoList = () => {
    const list_el = document.querySelector("#tasks");

    const tasksObj = JSON.parse(localStorage.getItem(taskKey))

    if(!tasksObj) return

    for(let taskId of Object.keys(tasksObj)) {
        const task_el = createTaskDiv(tasksObj[taskId],taskId)
        list_el.appendChild(task_el);
    }
}

window.addEventListener('load', () => {

    fetchTodoList()

    // TODO:
    // 1 - get last id and set to taskId
    // 2 - implement the complete deletion (delete from localstorage and html)
    // 3 - implement the complete edition (edit localstorage and html)

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputValue = input.value;

        if(!inputValue) {
            alert("Plese fill out the task!!")
            return;
        }

        const task_id = taskId++

        const task_el = createTaskDiv(inputValue,task_id)

        let taskObj = JSON.parse(localStorage.getItem(taskKey))

        if(taskObj) {
            taskObj[task_id] = inputValue
        } else {
            taskObj = {[task_id]: inputValue}
        }

        localStorage.setItem(taskKey, JSON.stringify(taskObj))

        input.value = "";

        list_el.appendChild(task_el);

    })
})
