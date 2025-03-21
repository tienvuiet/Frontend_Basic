document.getElementById("addTask").onclick = function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
    li.getElementsByClassName("delete-btn")[0].onclick = function () {
        let confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?");
        if (confirmDelete) {
            li.remove();
        }
    };
};