let arr = [];
let count = 0; 
let n = +prompt(`Nhập vào số phần tử trong mảng: `);
if (n === 0) {
    alert(`Mảng không có phần tử!!!`);
} else if (n < 0) {
    alert(`Số lượng phần tử không hợp lệ!!!`);
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt(`Nhập vào giá trị thứ ${i}`);
        arr.push(input);
    }
    for(let i = 0; i< n; i++){
        if(arr[i]<0){
            count++;
        }
    }
    alert(`${count}`);
}
