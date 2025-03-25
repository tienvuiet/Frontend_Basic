document.getElementById("input").onclick = function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    if (email === "") {
        alert(`Email không được bỏ trống`);
        return;
    }
    let passWord = document.getElementById("password").value.trim();
    if (passWord === "") {
        alert(`Password không được bỏ trống`);
        return;
    }
    let confirm = document.getElementById("confirmPassWord").value.trim();
    if (confirm !== passWord) {
        alert(`Mật khẩu không khớp`);
        return;
    }
    let getAccount = () => localStorage.getItem("account") || "[]";
    let saveAccount = (arr) => localStorage.setItem("account", arr);
    let accounts = JSON.parse(getAccount()); 
    let exitAccount = accounts.find(acc => acc.email === email);
    if (exitAccount) {
        alert(`Email đã tồn tại`);
    } else {
        let userImfor = {
            email: email,
            passWord: passWord,
        };
        accounts.push(userImfor);
        saveAccount(JSON.stringify(accounts)); 
        alert(`Đăng ký thành công`);
    }
};