

window.addEventListener('load', () => {

    alert("Welcome to HR - HugoVarelaRossi To Do List!!")

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    


    

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        
        if(!task) {
            alert("Plese fill out the task!!")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_el_content = document.createElement("div");
        task_el_content.classList.add("content");
        // task_el_content.innerText = task;

        task_el.appendChild(task_el_content);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_el_content.appendChild(task_input_el);
        // esse se adcionar, tem que tirar a linha 22

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

        list_el.appendChild(task_el);

        input.value = "";

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
    })
})
