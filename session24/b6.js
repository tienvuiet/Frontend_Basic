let arr = [];
let n = 0;
let choice;
while (true) {
    choice = +prompt(`
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7. Thoát chương trình`);
    switch (choice) {
        case 1:
            n = +prompt(`Nhập vào số lượng phần tử mảng: `);
            for (let i = 0; i < n; i++) {
                let input = prompt(`nhập vào phần tử thứ ${i + 1}: `);
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
                alert(`mảng rỗng`);
            } else {
                let tolength = 0;
                for (let i = 0; i < arr.length; i++) {
                    tolength += arr[i].length;
                }
                alert(`Độ dài của một chuỗi trong mảng là: ${tolength}`);
            }
            break;
        case 4:
            if (arr.length === 0) {
                alert("Mảng rỗng, vui lòng nhập dữ liệu trước!");
                break;
            }
            let kitu = prompt("Nhập vào ký tự muốn kiểm tra:").trim();
            if (kitu.length !== 1) {
                alert("Vui lòng nhập một ký tự duy nhất.");
                break;
            }
            let dem = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (kitu === arr[i][j]) {
                        dem++;
                    }
                }
            }
            alert(`Ký tự '${kitu}' xuất hiện ${dem} lần trong tất cả các chuỗi của mảng.`);
            break;
        case 5:
            if (arr.length === 0) {
                alert("Mảng rỗng, vui lòng nhập dữ liệu trước!");
                break;
            }
            let check = prompt("Nhập vào chuỗi cần kiểm tra:").trim();
            let reversed = check.split('').reverse().join('');  
            if (check === reversed) {
                alert(`Chuỗi '${check}' là chuỗi đối xứng.`);
            } else {
                alert(`Chuỗi '${check}' không phải là chuỗi đối xứng.`);
            }
            break;
        case 6:
            for (let i = 0; i < arr.length; i++) {
                let words = arr[i].split(' ');
                for (let j = 0; j < words.length; j++) {
                    let word = words[j].split('');
                    word[0] = word[0].toUpperCase();
                    words[j] = word.join('');
                }
                arr[i] = words.join(' ');
            }
            alert("Các chuỗi sau khi chuyển đổi thành chữ in hoa các ký tự đầu tiên của từ: " + arr.join(", "));
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