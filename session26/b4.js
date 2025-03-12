
let n = +prompt("Nhập vào số lượng phần tử mảng: ");
let arr = [];
for (let i = 0; i < n; i++) {
    let input = +prompt(`Giá trị thứ ${i + 1}: `);
    arr.push(input);
}
function nguyenTo(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let mangNguyenTo = arr.filter(element => nguyenTo(element));
console.log("Mảng ban đầu: ", arr);
console.log("Các số nguyên tố trong mảng: ", mangNguyenTo);