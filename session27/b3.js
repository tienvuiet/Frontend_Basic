
let choice;
let banKinh;
let chieuDai;
let chieuRong;
while (true) {
    choice = +prompt(`
        Menu
        1.Tính diện tích hình tròn
        2.Tính chu vi hình tròn
        3.Tính diện tích hình chữ nhật
        4.Tính chu vi hình chữ nhật
        5.Thoát
        Lựa chọn:
        `);
    switch (choice) {
        case 1:
            banKinh = +prompt(`Nhập vào bán kính hình tròn: `);
            dienTichHinhTron(banKinh);
            break;
        case 2:
            chuViHinhTron(banKinh);
            break;
        case 3:
            chieuDai = +prompt(`Nhập vào chiều dài hình chữ nhật: `);
            chieuRong = +prompt(`Nhập vào chiều rộng hình chữ nhật: `);
            dienTichHinhChuNhat(chieuDai, chieuRong);
        case 4:
            chuViHinhChuNhat(chieuDai, chieuRong);
        case 5:
            alert(`Đã thoát chươg trình!!`);
            break;
    }
    if (choice === 5) {
        break;
    }

}
function dienTichHinhTron(r) {
    let dienTichTron = r * r * 3.14;
    console.log(`Diện tích hình tròn với bán kính ${r} là: ${dienTichTron}`);
}
function chuViHinhTron(r) {
    let chuViHinhTronn = 2 * r * 3.14;
    console.log(`Chu vi hình tròn cới bán kính ${r} là: ${chuViHinhTronn}`);
}
function dienTichHinhChuNhat(dai, rong) {
    let dientich = dai*rong;
    console.log(`Diện tích hình chữ nhật là: ${dientich}`);
}
function chuViHinhChuNhat(dai, rong){
    let chuVi= (dai+rong)*2;
    console.log(`Chu Vi hình chữ nhật là: ${chuVi}`);
}