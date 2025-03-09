let n = +prompt("Nhập vào số lượng phần tử trong mảng!!!");
let a = [];
let tong = 0;
let count = 0;
if (n === 0) {
    alert("Mảng không có phần tử");
} else if (n < 0) {
    alert("Số lượng phần tử không được âm!!!");
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập vào giá trị phần tử thứ ${i + 1}`);
        a.push(input);
    }

    for (let i = 0; i < n; i++) {
        let num = Number(a[i]);
        if (!isNaN(num)) {
            tong += num;
            count++;
        }
    }
}
if (count > 0) {
    alert(`Tổng các số trong mảng là: ${tong}`);
} else {
    alert("Mảng không có phần tử nào là số");
}


