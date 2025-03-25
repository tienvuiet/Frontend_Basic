
const contentInput = document.getElementById("content");
const dateInput = document.getElementById("date");
const statusInput = document.getElementById("pending");
const usernameInput = document.getElementById("username");
const submitBtn = document.getElementById("input");
const table = document.getElementById("bang");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function displayTasks() {
    table.innerHTML = `
        <tr id="tieuDe">
            <th>#</th>
            <th>Content</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Assigned to</th>
            <th>Action</th>
        </tr>
    `;
    tasks.forEach((task, index) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.content}</td>
            <td>${task.date}</td>
            <td>${task.status}</td>
            <td>${task.username}</td>
            <td>
                <button onclick="editTask(${index})">Sửa</button>
                <button onclick="deleteTask(${index})">Xóa</button>
            </td>
        `;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
submitBtn.addEventListener("click", () => {
    const newTask = {
        content: contentInput.value,
        date: dateInput.value,
        status: statusInput.value,
        username: usernameInput.value
    };

    if (newTask.content && newTask.date && newTask.status && newTask.username) {
        tasks.push(newTask);
        displayTasks();
        contentInput.value = "";
        dateInput.value = "";
        statusInput.value = "";
        usernameInput.value = "";
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
});
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    const task = tasks[index];
    contentInput.value = task.content;
    dateInput.value = task.date;
    statusInput.value = task.status;
    usernameInput.value = task.username;
    submitBtn.onclick = function () {
        tasks[index] = {
            content: contentInput.value,
            date: dateInput.value,
            status: statusInput.value,
            username: usernameInput.value
        };
        displayTasks();
        submitBtn.onclick = addTask; 
    };
}
displayTasks();
