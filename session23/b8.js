let arr = [];
let n = +prompt(`Nhập vào số lượng phần tử mảng: `);

if (n === 0) {
    alert(`Mảng không có phần tử nào..`);
} else if (n < 0) {
    alert(`Số lượng phần tử mảng không được nhỏ hơn 0..`);
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt(`Nhập vào giá trị thứ ${i + 1}: `);
        arr.push(input);
    }
    if (n >= 2) {
        arr[0] = 0;
        arr[1] = 1;
    } else if (n === 1) {
        arr[0] = 0;
    }
    let Fibonacci = true;
    for (let i = 2; i < n; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            Fibonacci = false;
            break;
        }
    }
    if (Fibonacci) {
        alert(`Là dãy số fibonacci`);
    } else {
        alert(`Không phải dãy số fibonacci`);
    }
}