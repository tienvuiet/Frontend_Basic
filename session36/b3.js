document.getElementById("red").onclick = function () {
    let mauNen = document.getElementById("container");
    mauNen.style.backgroundColor = " red"
    localStorage.setItem("mauNen","red");
}
document.getElementById("blue").onclick = function () {
    let mauNen = document.getElementById("container");
    mauNen.style.backgroundColor = " aqua"
    localStorage.setItem("mauNen","blue");
}
document.getElementById("yellow").onclick = function () {
    let mauNen = document.getElementById("container");
    mauNen.style.backgroundColor = " yellow"
    localStorage.setItem("mauNen","yellow");
}
document.getElementById("violet").onclick = function () {
    let mauNen = document.getElementById("container");
    mauNen.style.backgroundColor = "violet"
    localStorage.setItem("mauNen","violet");
}