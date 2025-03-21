
document.getElementById("nutBam").onclick = function() {
    let r = Math.floor( Math.random()* 256)
    let g = Math.floor( Math.random()* 256)
    let b = Math.floor( Math.random()* 256)
    document.getElementById("container").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};