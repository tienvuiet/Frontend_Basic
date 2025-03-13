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
console.log(`Số còn thiếu trong mảng là: `, checkk(arr));
function checkk (arr){
    for(let i =arr.length-1; i>=0; i--){
        if(arr[i]-arr[i-1]!==1){
            return arr[i]-1;
        }
    }
}