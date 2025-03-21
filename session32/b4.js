document.getElementById("check").onclick = function() {
    let input = document.getElementById("text").value;
    if (input.indexOf('@') !== -1 && (input.endsWith('.com') || input.endsWith('.vn'))) {
        document.getElementById("hople").style.display = "block";
    } else {
        document.getElementById("khonghople").style.display = "block"; 
    }
}