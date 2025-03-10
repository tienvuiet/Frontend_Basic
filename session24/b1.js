let choice;
let arr = [];
let n = 0;
while (true) {
    choice = +prompt(`
        1.Nhập mảng
        2.Hiển thị mảng
        3.Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4.Tính tổng các phần tử trong mảng
        5.Tìm số lần xuất hiện của một phần tử trong mảng
        6.Xắp xếp mảng theo tăng dần
        7.Thoát chương trình`);
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
            if (arr.length === 0) {
                alert(`Mảng rỗng`);
            } else {
                let max = Math.max(...arr);
                let min = Math.min(...arr);
                alert(`Phần tử lớn nhất trong mảng là: ${max}`);
                alert(`phần tử nhỏ nhất trong mảng là: ${min}`);
            }
            break;
        case 4:
            if (arr.length === 0) {
                alert(`Mảng rỗng`)
            } else {
                let tong = 0;
                for (let i = 0; i < arr.length; i++) {
                    tong += arr[i];
                }
                alert(`Tổng các phần tử trong mảng là: ${tong}`);
            }
        case 5:
            if (arr.length === 0) {
                alert(`Mảng rỗng`);
            } else {
                let check = +prompt(`nhập vào giá trị muốn kiểm tra: `);
                let dem = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (check === arr[i]) {
                        dem++
                    }
                }
                if (dem > 0) {
                    alert(`Phần tử ${check} xuất hiện ${dem} lần trogn mảng`);
                } else {
                    alert(`giá trị muốn tìm không có trong mảng!`);
                }
            }
            break;
        case 6:
            if(arr.length===0){
                alert(`Mảng rỗng`);
            }else{
                arr.sort();
                alert(`mảng được xắp xếp theo thứ tự tăng dần là: ` + arr.join(", "));
            }
            break;
        case 7:
            alert(`Thoát chương trình`);
            break;
        default:
            alert(`Giá trị nhập vào không hợp lệ!`);
            break;            
    }
    if(choice===7){
        break;
    }
}