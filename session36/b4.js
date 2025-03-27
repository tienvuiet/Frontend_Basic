document.getElementById("mode-icon").onclick = function () {
    let nav = document.getElementsByClassName("navbar")[0];
    let h1 = document.getElementById("tieuDe");
    let carts = document.querySelectorAll(".product-card");
    let muas = document.querySelectorAll(".buy-btn");
    let nens = document.querySelectorAll(".product-list");
    // let nenTongs = document.querySelectorAll(".container");
    let tong = document.getElementById("tong");
    if (nav.style.backgroundColor === "rgb(51, 51, 51)") { 
        nav.style.backgroundColor = "#ffffff";
        h1.style.color = "#000000";
        carts.forEach(cart => cart.style.backgroundColor = "white");
        muas.forEach(mua => mua.style.backgroundColor = "#3498db");
        nens.forEach(nen => nen.style.backgroundColor = "#f5f5f5");
        tong.style.backgroundColor="#f5f5f5"
        // nenTongs.forEach(nenTong => nenTong.style.backgroundColor = "#f5f5f5");
    } else {
        nav.style.backgroundColor = "#333333";
        h1.style.color = "#fefefe";
        carts.forEach(cart => cart.style.backgroundColor = "#333333");
        muas.forEach(mua => mua.style.backgroundColor = "#e67e22");
        nens.forEach(nen => nen.style.backgroundColor = "#1e1e1e");
        // nenTongs.forEach(nenTong => nenTong.style.backgroundColor = "#1e1e1e");
         tong.style.backgroundColor="#1e1e1e"
    }
};