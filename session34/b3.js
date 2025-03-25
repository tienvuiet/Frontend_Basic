const emailInput = document.querySelector("#InputEmail");
const passwordInput = document.querySelector("#InputPassword");
const from = document.querySelector(".from");
let users = JSON.parse(localStorage.getItem("users")) || [];

from.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password ) {
        alert("Không được để trống");
        return;
    };

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !emailCheck.test(email)) {
        alert("Email không hợp lệ");
        return;
    }

    if (password.length < 8) {
        alert("Mật khẩu phải ít nhất 8 ký tự");
        return;
    }


    const user = {
        email: email,
        password: password
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    emailInput.value = "";
    passwordInput.value = "";

    alert("Đăng ký thành công!");
});