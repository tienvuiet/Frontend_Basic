let choice;
let arr = [];
let n = 0; // Khai báo mặc định để tránh undefined

while (true) {
    choice = +prompt(`
        ==============Menu================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7. Thêm một phần tử vào vị trí chỉ định
        8. Thoát
        ===================================
        Lựa chọn của bạn là:`);
    switch (choice) {
        case 1:
            n = +prompt(`Nhập vào số lượng phần tử mảng:`);
            if (isNaN(n) || n <= 0) {
                alert(`Giá trị n không hợp lệ, vui lòng nhập lại.`);
            } else {
                arr = [];
                for (let i = 0; i < n; i++) {
                    let input = +prompt(`Nhập vào phần tử thứ ${i + 1}`);
                    arr.push(input);
                }
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert(`Mảng đang trống, hãy nhập dữ liệu trước!`);
            } else {
                alert(`Các phần tử đang quản lý là: ` + arr.join(", "));
            }
            break;

        case 3:
            if (arr.length === 0) {
                alert(`Mảng trống, không thể tính tổng số chẵn!`);
            } else {
                let tong = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        tong += arr[i];
                        alert(`Phần tử chắn thứ ${i}: ${arr[i]}`);
                    }
                }

                alert(`Tổng các số chẵn trong mảng là: ${tong}`);
            }
            break;
        case 4:
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            let min = arr[0];
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] < min) {
                    min = arr[j];
                }
            }
            alert(`Giá trị lớn nhất trong mảng là: ${max}`);
            alert(`Giá trị nhỏ nhất trong mảng là: ${min}`);
        case 5:
            let ad = []; 
            let tong = 0; 
            for (let i = 0; i < arr.length; i++) {
                let isPrime = true;

                for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                    if (arr[i] % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime && arr[i] > 1) { 
                    ad.push(arr[i]);
                    tong += arr[i];
                }
            }
            if (ad.length > 0) {
                alert(`Các phần tử là số nguyên tố trong mảng là: ${ad.join(", ")}`);
                alert(`Tổng của các số nguyên tố là: ${tong}`);
            } else {
                alert(`Mảng không có số nguyên tố.`);
            }
            break;
        case 6:
            let m = +prompt(`nhập vào số muốn thống kê`);
            let dem =0;
            for(let i=0; i< arr.length; i++){
                if(arr[i]===m){
                dem++;
                }
            }
            alert(`phần tử ${m} xuất hiện ${dem} lần trong mảng`);    
            break;
        case 7:
            let phantu = prompt(`nhập vào phần tử muốn them`);
            let vitri = +prompt(`Nhập vào vị trí muốn thêm phần tử: `); 
            arr.splice(vitri, 0, phantu);
            alert("Mảng sau khi thêm phần tử: " + arr.join(", "));
            break;
        case 8:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
    if (choice === 8) break;
}
