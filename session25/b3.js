let arr = [1,2,4,67,8];
alert(`kết quả của hàm check: ${check(arr)}`);
function check(array) {
    let soChan = [];
    for (let i = 0; i < array.length; i++) {
        if (!Number.isInteger(array[i])) {
            alert(`Dữ liệu không hợp lệ`)
            return null;
        }
    }
    let dem = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            dem++;
            soChan.push(array[i]);
        }
    }
    if (dem === 0) {
        alert(`mảng không chứa số chẵn`);
    }
    return soChan.join(", ")
}