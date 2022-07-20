window.addEventListener('load', () => {

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
        task_el_content.innerText = task;

        task_el.appendChild(task_el_content);

        task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        // task_el_content.appendChild(task_input_el);
        // esse se adcionar, tem que tirar a linha 22

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const viviani = document.createElement("button");
        


        list_el.appendChild(task_el);

        input.value = "";


    })

   

})
