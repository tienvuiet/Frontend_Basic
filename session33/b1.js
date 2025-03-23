    let taskPassword = document.getElementById("password");
    taskPassword.type = "password"
    document.getElementById("iconShow").onclick = function () {
        if (taskPassword.type === "password") {
            taskPassword.type = "text";
        } else {
            taskPassword.type = "password";
        }
    };