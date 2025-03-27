let jobStatus = document.getElementById("pendingTasks"); 
let jobStatusHD = document.getElementById("inProgressTasks");
let jobStatusDone = document.getElementById("doneTasks");
document.getElementById("input").onclick = function() {
    let jobName = document.getElementById("taskName").value.trim(); 
    if (jobName !== "") { 
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        let taskText = document.createElement("p");
        taskText.textContent = jobName;
        let moveButton = document.createElement("button");
        moveButton.textContent = "Chuyển tiếp";
        moveButton.classList.add("chuyenHD");
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(moveButton);
        jobStatus.appendChild(taskDiv);
        localStorage.setItem(jobName, "chờ xử lý");
        document.getElementById("taskName").value = ""; 
    }
};
jobStatus.addEventListener("click", function(event) {
    if (event.target.classList.contains("chuyenHD")) {
        let taskDiv = event.target.parentElement;
        let jobName = taskDiv.querySelector("p").textContent;
        jobStatus.removeChild(taskDiv);
        event.target.remove();
        let completeButton = document.createElement("button");
        completeButton.textContent = "Hoàn thành";
        completeButton.classList.add("hoanThanh");
        taskDiv.appendChild(completeButton); 
        jobStatusHD.appendChild(taskDiv); 
        localStorage.setItem(jobName, "Đang làm");
    }
});
jobStatusHD.addEventListener("click", function(event) {
    if (event.target.classList.contains("hoanThanh")) {
        let taskDiv = event.target.parentElement;
        let jobName = taskDiv.querySelector("p").textContent;
        jobStatusHD.removeChild(taskDiv);
        event.target.remove();
        jobStatusDone.appendChild(taskDiv);
        localStorage.setItem(jobName, "Hoàn thành");
    }
});
