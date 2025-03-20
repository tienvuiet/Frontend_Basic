document.getElementById("container").onclick = function () {
    let currentBgColor = document.getElementById("container").style.backgroundColor;
    if(currentBgColor === "black") {
        document.getElementById("container").style.backgroundColor = "white";
        document.getElementById("container").style.color = "black";
    } else {
        document.getElementById("container").style.backgroundColor = "black";
        document.getElementById("container").style.color = "white";
    }
}