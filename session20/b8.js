let num = +prompt("Mời bạn nhập số lượng số nguyên tố cần được hiển thị: ");
let result = "";

if (isNaN(num) || num <= 0) {
    alert(`nhập vào số lượng :`)
} else {
    let count = 0;
    let number = 2;
    while (count < num) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += number + " ";
            count++;
        }
        number++;
    }
    alert(`kết quả là: ${result}`);
}