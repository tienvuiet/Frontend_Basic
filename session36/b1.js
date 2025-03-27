document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save");
    const doiTenButton = document.getElementById("doiTen");
    if (saveButton) {
        saveButton.onclick = function () {
            const name = document.getElementById("name").value;
            localStorage.setItem("name", JSON.stringify(name));
            let themCart = document.getElementById("hienThiTen");
            themCart.innerHTML = `
                <i class="fa-solid fa-mask"></i>
                <h2>Chào bạn ${name}</h2>
            `;
            document.getElementById("container1").style.display = "none";
            document.getElementById("container2").style.display = "flex";
        };
    }
    if (doiTenButton) {
        doiTenButton.onclick = function () {
            document.getElementById("container1").style.display = "flex";
            document.getElementById("container2").style.display = "none";
            document.getElementById("name").value = "";
        };
    }
});
