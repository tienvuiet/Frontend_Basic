let text = document.getElementById("text")
let an1 = document.getElementById("an1")
let fontSize = 16
an1.onclick = function () {
    fontSize+=4
    text.style.fontSize = fontSize + "px"   
}
an2.onclick = function(){
    fontSize-=4
    text.style.fontSize = fontSize + "px"
}
