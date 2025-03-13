let arr = [];
let n;
n = +prompt(`Nhập vào số lượng phần tử:`);
for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhập vào gía trị thứ ${i + 1}: `);
    if (Number.isInteger(input)) {
        arr.push(input);
    } else {
        alert(`Không phải số nguyên hãy nhập lại giá trị thứ ${i + 1}!`)
        input = +prompt(`Nhập vào gía trị thứ ${i + 1}: `);
    }
}
console.log(`Mảng ban đầu là: `, arr);
console.log(`Kết quả của mảng sau khi check là: `,check(arr));
function check(arr) {
    let d = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== d) {
            return false;
        } 
    }
    return true;
}
