let arr = [];
while (true) {
    let choise = +prompt(`
        MENU
        1.Nhập vào mảng
        2.Hiển thị mảng
        3.Thêm phần tử mảng
        4.Sửa phần tử
        5.Xóa phần tử
        6.Thoát
        Lựa chọn của bạn:`);
    switch (choise) {
        case 1:
            let n = +prompt(`Nhập vào số lượng phần tử của mảng: `);
            for (let i = 0; i < n; i++) {
                let giatri = prompt(`Nhập vào giá trị thứ ${i + 1}: `);
                arr.push(giatri);
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert("Mảng rỗng");
            } else {
                let danhSach = "Mảng hiện tại:\n";
                for (let i = 0; i < arr.length; i++) {
                    danhSach += `${i}: ${arr[i]}\n`;
                }
                alert(danhSach);
            }
            break;
        case 3:
            let vitri = +prompt(`Nhập vào vị trí muốn thêm phần tử`);
            vitri = vitri - 1
            let giatri = prompt(`Nhập vào giá trị muốn thêm`);
            arr.splice(vitri, 0, giatri);
            break;
        case 4:
            let vitrii = +prompt(`Nhập vào vị tri muốn sửa: `);
            let giatrii = prompt(`Nhập vào giá trị muốn thay đổi: `);
            arr[vitrii-1]=giatrii;
            break;
        case 5:
            let vitriii = +prompt(`Nhập vào giá trị muốn xóa:`);
            arr.splice(vitriii ,1);
            let danhSach = "Mảng hiện tại:\n";
                for (let i = 0; i < arr.length; i++) {
                    danhSach += `${i}: ${arr[i]}\n`;
                }
                alert(danhSach);
        case 6:
            alert(`thoát trương trình `);
            break;
        default:
            alert(`Giá trị nhập vào không hợp lệ!!!`);    
    }
    if (choise === 6) {
        break;
    }
}