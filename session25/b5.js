let array = [-2, 2, 34, -5];
alert(`Kết quả của kết quả check là: ${check(array)}`);
function check(arr) {
    let nguyenDuong = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            nguyenDuong.push(arr[i]);
        }
    }
    if (nguyenDuong.length === 0) {
        return "Không có số nguyên dương trong mảng";
    }
    return nguyenDuong.join(", ");
}