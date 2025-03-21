
let dem = 0;
document.getElementById("bam").onclick = function () {
    dem++; 
    document.getElementById("solan").textContent = "Số lần bấm: " + dem;
};