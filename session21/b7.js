let tienBanDau = +prompt(`Tiền ban đầu: `);
let laiXuat = +prompt(`Lãi xuất: `);
let soThangGui = +prompt(`Số Tháng gửi: `);
if(isNaN(tienBanDau)||isNaN(laiXuat)||isNaN(soThangGui)){
    alert(`Giá trị nhập vào không hợp lệ`);
}else if(tienBanDau>0&&laiXuat>0&&soThangGui>0){
    let lai = laiXuat/100;
    let tienNhan=tienBanDau + Math.pow((1+lai),soThangGui);
    let laiduoc = tienNhan-tienBanDau;
    console.log(`Tiền lãi: ${laiduoc}`);
    console.log(`Tiền nhận được: ${tienNhan}`);
}