let input = document.getElementById("input");
let soKyTu = document.getElementById("soKyTu")
let kiemTra = document.getElementById("check").onclick = function () {
    let dem = input.value.length
    soKyTu.innerHTML=""
    let soKyTu1 = document.createElement("div")
    soKyTu1.innerHTML = `
    <div>${dem} ký tự </div>
    `
    document.getElementById("soKyTu").appendChild(soKyTu1);
    input.value=""
}



