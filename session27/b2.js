let n;
let arr = [];
let choice;
while (true) {
    choice = +prompt(`
        Menu
        1.Nhập vào danh sách sinh viên
        2.Hiển thị danh sách sinh viên
        3.Tìm sinh viên theo tên
        4.Xóa sinh viên ra khỏi danh sách
        5.Thoát`);
    switch (choice) {
        case 1:
            nhap();
            break;
        case 2:
            xuat();
            break;
        case 3:
            timKiem();
            break;
        case 4:
            console.log(`Đã xóa sinh viên ra khỏi danh sách, danh sách sau khi xóa là:`);
            xoa();
            break;
        case 5:
            alert(`Đã thoát chương trình!!`);
            break;
    }
    if (choice === 5) {
        break;
    }
}
function nhap() {
    n = +prompt(`Nhập vào số lượng sinh viên: `);
    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập vào sinh viên thứ ${i + 1}: `);
        arr.push(input);
    }
}
function xuat() {
    console.log(`Danh sách sinh viên: `);
    for (let i in arr) {
        console.log(`${+i + 1}.${arr[i]}`);
    }
}
function timKiem() {
    let sinhVien = prompt(`Nhập vào sinh viên muốn tìm kiếm:`).toLowerCase();
    let ketQua = arr.filter(element => element.toLowerCase().includes(sinhVien));
    if (ketQua.length > 0) {
        console.log(`Các sinh viên tìm thấy:`);
        for (let i in ketQua) {
            console.log(`${+i + 1}. ${ketQua[i]}`);
        }

    } else {
        console.log(`Không tìm thấy sinh viên nào!`);
    }
}
function xoa() {
    let sinhVienXoa = prompt(`Nhập vào tên sinh viên cần xóa:`);
    let newArr = arr.filter(element => !element.includes(sinhVienXoa));
    console.log(newArr);
}