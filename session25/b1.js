
// let arr = [];
// let n = +prompt(`Nhập số lượng phần tử mảng: `);
// for (let i = 0; i < n; i++) {
//     let input = +prompt(`Nhập vào phần tử thứ ${i + 1}: `);
//     if (isNaN(input)) {
//         alert(`Giá trị không hợp lệ, vui lòng nhập số.`);
//         i--; 
//     } else {
//         arr.push(input);
//     }
// }
let arr = [2,3,4,1,6];
if (arr.length !== 0) {
    alert(`Phần tử nhỏ nhất trong mảng là: ` + Min(arr));
}
function Min(array) {
    if (array.length === 0) {
        alert(`Mảng không chứa phần tử`);
        return null;
    }
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            alert(`Mảng chứa giá trị không hợp lệ.`);
            return null;
        }
    }
    return Math.min(...array);
}
