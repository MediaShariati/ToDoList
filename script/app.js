window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listElemen = document.querySelector("#tasks");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const task = input.value;

        if (!task) {
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContentElement = document.createElement("div");
        taskContentElement.classList.add("contents");

        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");
        taskInputElement.value = input.value;
        taskInputElement.type = "text";
        taskInputElement.setAttribute("readonly", "readonly");


        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("action");

        const editElement = document.createElement("button");
        editElement.innerText = "Edit";
        editElement.classList.add("edit");
        taskActionsElement.appendChild(editElement);

        const checkElement = document.createElement("button");
        checkElement.innerHTML = "Complete";
        checkElement.classList.add("check");
        taskActionsElement.appendChild(checkElement);

        const deleteElement = document.createElement("button");
        deleteElement.classList.add("delete");
        deleteElement.innerHTML = "Delete";
        taskActionsElement.appendChild(deleteElement);

        taskElement.appendChild(taskActionsElement);

        listElemen.appendChild(taskElement);

        input.value = "";

        editElement.addEventListener("click", () => {
            if (editElement.innerText.toLowerCase() === "edit") {
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                editElement.innerText = "Save";

            } else {
                taskInputElement.setAttribute("readonly", "readonly");
                editElement.innerHTML = "Edit";
            }
        })

        deleteElement.addEventListener("click", () => {
            taskElement.remove();
        })

        checkElement.addEventListener("click", () => {
            taskInputElement.classList.toggle("completed");
        })
    })
})