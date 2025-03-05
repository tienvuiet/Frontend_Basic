let n = +prompt("Nhập vào số muốn kiểm tra:");
if (isNaN(n) || n < 2 || n !== Math.floor(n)) {
    alert("Không phải là số nguyên tố");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime===true) {
        alert(`Không là số nguyên tố`);
    } else {
        alert("Là số nguyên tố");
    }
}