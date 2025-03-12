let n = +prompt(`Nhập vào số lượng phần tử mảng: `);
let array = [];
for (let i = 0; i < n; i++) {
    let input = +prompt(`array[${i}]`);
    array.push(input);
}
function checkMax(arr) {
    let max = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return `${max} ở vị trí ${index}`;
}
let result = checkMax(array); 
console.log(result); 




