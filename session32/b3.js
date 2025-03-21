let button = document.getElementById("button");
let subjectList = document.getElementById("subjectList");

button.onclick = function () {
    let subjectName = document.getElementById("input").value;
    if (subjectName === "") {
        alert("Tên môn học không được để trống!");
    } else {
        let newListItem = document.createElement("li");
        newListItem.textContent = subjectName;
        subjectList.appendChild(newListItem);
        document.getElementById("input").value = "";
    }
};