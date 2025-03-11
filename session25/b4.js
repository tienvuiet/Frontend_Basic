let numbercheck = +prompt(`Nhập vào một số nguyên dương bất kì: `);
check(numbercheck);
function check(number) {
    if (!Number.isInteger(number) || number < 0) {
        alert(`dữ liệu không hợp lệ `);
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === false) {
            alert(`Không là số nguyên tố`);
        } else {
            alert("Là số nguyên tố");
        }
    }
}
