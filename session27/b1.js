let n;
let arr = [];
let choice;
while (true) {
    choice = +prompt(`
        Menu
        1.Cộng hai số
        2.Trừ hai số
        3.Nhân hai số
        4.Chia hai số
        5.thoát
        Lựa chọn của bạn: `);
    switch (choice) {
        case 1:
            n = +prompt(`nhập số 2:`);
            for (let i = 0; i < n; i++) {
                let input = +prompt(`Nhâpj vào 2 phần tử, phần tử ${i}: `);
                arr.push(input);
            }
            if (arr.length > 2 || arr.length === 0) {
                alert(`Giá trị nhập vào không hợp lệ!!`);
            } else {
                let tong = 0;
                tong = arr[0] + arr[1];
                alert(`tổng hai số là: ${tong}`);
            }
            break;
        case 2:
            if (arr.length > 2 || arr.length === 0) {
                alert(`Giá trị nhập vào không hợp lệ!!`);
            } else {
                let hieu = 0;
                hieu = arr[0] - arr[1];
                alert(`hieu hai số là: ${hieu}`);
            }
            break;
        case 3:
            if (arr.length > 2 || arr.length === 0) {
                alert(`Giá trị nhập vào không hợp lệ!!`);
            } else {
                let tich = 1;
                tich = arr[0] * arr[1];
                alert(`hieu hai số là: ${tich}`);
            }
            break;
        case 4:
            if (arr.length > 2 || arr.length === 0) {
                alert(`Giá trị nhập vào không hợp lệ!!`);
            } else {
                let thunthun = 1;
                thunthun = arr[0] / arr[1];
                alert(`thương hai số là: ${thunthun}`);
            }
            break;
        case 5:
            alert(`Đã thoát chương trình!!`)
            break;
    }
    if (choice === 5) {
        break;
    }
}