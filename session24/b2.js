let arr = [];
let n = 0;
let choice;
while (true) {
    choice = +prompt(`
        1.nhập vào mảng số nguyên
        2.Hiển thị mảng
        3.Tìm phần tử chẵn và lẻ
        4.Tính trung bình cộng của mảng
        5.xóa phần tử tại vị trí chỉ định
        6.Tìm phần tử lớn thứ hai trong mảng
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
            let chan = [];
            let le = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    chan.push(arr[i]);
                } else {
                    le.push(arr[i]);
                }
            }
            alert(`Các phần tử chẵn trong mảng là: ` + chan.join(", "));
            alert(`Các phần tử lẻ trong mảng là: ` + le.join(", "));
            break;
        case 4:
            let tong = 0;
            for (let i = 0; i < arr.length; i++) {
                tong += a[i];
            }
            let trungBinhCong = tong / 3;
            alert(`trung bình cộng của mảng là: ${trungBinhCong}`);
            break;
        case 5:
            alert(`Các phần tử đang quản lý là: ` + arr.join(", "));
            let viTri = +prompt(`Nhập vào vị trí muốn xóa`);

            if (viTri >= 0 && viTri < arr.length) {
                arr.splice(viTri, 1);
                alert(`Các phần tử sau khi xóa là: ` + arr.join(", "));
            } else {
                alert("Vị trí nhập không hợp lệ!");
            }
            break;
        case 6:
            let max = arr[0];
            let maxsecond = arr[0];
            for (let i = 0; i < n; i++) {
                if (arr[i] > max) {
                    maxsecond = max;
                    max = arr[i];
                }
            }
            alert(`Giá trị lớn thứ 2 trong mảng là: ${maxsecond}`);
            break;
        case 7:
            alert(`thoát chương trình!!!`);
            break;
        default:
            alert(`Giá trị nhập vào không hợp lệ`);
            break;        
    }
    if(choice===7){
        break;
    }
}

