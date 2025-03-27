
let dem1 = JSON.parse(localStorage.getItem("dem1")) || 0;
let dem2 = JSON.parse(localStorage.getItem("dem2")) || 0;
let dem3 = JSON.parse(localStorage.getItem("dem3")) || 0;
function updateLike(luotThichId, dem) {
    const themCart = document.querySelector(`#noiDung1:nth-child(${luotThichId}) #luotThich`);
    themCart.innerHTML = ""; 
    let cart = `
        <i class="fa-solid fa-heart"></i>
        <p>${dem} lượt thích</p>
    `;
    themCart.innerHTML += cart;
}
document.getElementById("thich1").onclick = function () {
    dem1++;
    localStorage.setItem("dem1", JSON.stringify(dem1));
    updateLike(1, dem1); 
};

document.getElementById("thich2").onclick = function () {
    dem2++;
    localStorage.setItem("dem2", JSON.stringify(dem2));
    updateLike(2, dem2); 
};

document.getElementById("thich3").onclick = function () {
    dem3++;
    localStorage.setItem("dem3", JSON.stringify(dem3));
    updateLike(3, dem3); 
};
window.onload = function () {
    updateLike(1, dem1);
    updateLike(2, dem2);
    updateLike(3, dem3);
};