
let arr = [];
for (let i = 0; i < 10; i++) {
    let input = +prompt(`Nhập vào giá trị ${i}`);
    arr.push(input);
}
console.log(`Giá trị ban đầu của mảng là:`, arr);
if (arr.length === 0) {
    console.log(`Không có số lớn nhất`);
} else {
    let max = arr[0];
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            count = i;
        }
    }
    console.log(`Số lớn nhất là: ${max}`);
    console.log(`Vị trí: ${count}`);
}