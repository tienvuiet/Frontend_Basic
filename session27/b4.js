let n;
let arr = [];
let choice;
while (true) {
    choice = +prompt(`
        Menu:
        1.Nhập danh sách số nguyên
        2.Tính trung bình các số
        3.Số chẵn lớn nhất
        4.Số lẻ nhỏ nhất
        5.Thoát
        Lựa chọn:`);
    switch (choice) {
        case 1:
            nhap();
            break;
        case 2:
            trungBinh();
            break;
        case 3:
            chanMaxx();
            break;
        case 4:
            leMin();
            break;
        case 5:
            alert(`Đã Thoát Chương trình!!`);
            break;
    }
    if (choice === 5) {
        break;
    }
}
function nhap() {
    n = +prompt(`Nhập vào số lượng phần tử trong danh sách:`);
    for (let i = 0; i < n; i++) {
        let input = +prompt(`Nhập vào gía trị thứ ${i + 1}: `);
        if (Number.isInteger(input)) {
            arr.push(input);
        } else {
            alert(`Không phải số nguyên hãy nhập lại giá trị thứ ${i + 1}!`)
            input = +prompt(`Nhập vào gía trị thứ ${i + 1}: `);
        }
    }
}
function trungBinh() {
    let tong = 0;
    for (let i in arr) {
        tong += arr[i];
    }
    let trungBinhCong = tong / n;
    console.log(`trung bình cộng của danh sách: ${trungBinhCong}`);
}
function chanMaxx() {
    let maxx = Math.max(...arr);
    let sup = arr.filter(element => element === maxx && element % 2 === 0);
    console.log(`Số chẵn lớn nhất là:`)
    console.log(sup);
}
function leMin() {
    let minn = Math.min(...arr);
    let superMin = arr.filter(sup => sup === minn && sup % 2 !== 0);
    console.log(`Số lẻ nhỏ nhất:`);
    console.log(superMin);
}