let arr = [];
let n = 0;
let choice;
while (true) {
    choice = +prompt(`
        1.nhập vào mảng số nguyên
        2.Hiển thị mảng
        3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4.Tính tổng và trung bình cộng của các số dương trong mảng
        5.Đảo ngược mảng
        6.Kiểm tra mảng có đối xứng không
        7.thoát chương trình`);
    switch (choice) {
        case 1:
            n = +prompt(`Nhập vào số lượng phần tử mảng: `);
            for (let i = 0; i < n; i++) {
                let input = +prompt(`nhập vào phần tử thứ ${i + 1}: `);
                arr.push(input);
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert(`mảng rỗng`);
            } else {
                alert(`Các phần tử đang quản lý là: ` + arr.join(", "));
            }
            break;
        case 3:
            let maxx = Math.max(...arr);
            alert(`Giá trị lớn nhất trong mảng là: ${maxx}`);
            break;
        case 4:
            let tong = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    tong += a[i];
                }
            }
            let trungBinhCong = tong / 3;
            alert(`trung bình cộng cac so duong của mảng là: ${trungBinhCong}`);
            break;
        case 5:
            let mang = [];
            alert(`mảng ban đầu là: ` + arr.join(", "));
            for (let i = arr.length - 1; i >= 0; i--) {
                mang.push(arr[i]);
            }
            alert(`mảg đảo ngược là: ` + mang.join(", "));
        case 6:
            alert(`Mảng ban đầu là: ` + arr.join(", "));
            let dao = arr.slice().reverse();   
            // .slice() mảng mới chứa các phần tử mảng cũ không làm thay đổi mảng
            if (arr.join() === dao.join()) {
                alert(`Đây là mảng đối xứng`);
            } else {
                alert(`Đây không phải mảng đối xứng`);
            }
            break;
        case 7:
            alert(`thoát chương trình!!!`);
            break;
        default:
            alert(`Giá trị nhập vào không hợp lệ`);
            break;
    }
    if (choice === 7) {
        break;
    }
}

