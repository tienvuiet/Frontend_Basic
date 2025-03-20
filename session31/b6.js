let form = document.getElementById("form");
form.addEventListener("submit", function (even) {
    even.preventDefault();
    let emailValue = form.email.value
    let passwordValue = form.password.value
    if (emailValue === "huanrose@gmail.com" && passwordValue === "123456") {
        console.log(`Đăng nhập thành công`);
    } else {
        console.log(`Đăng nhập không thành công`);

    }
})

// .addEventListener() giúp lắng nghe (bắt sự kiện) trên một phần tử HTML và thực hiện hành động khi sự kiện xảy ra.gg