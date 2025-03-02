let gio = +prompt("mời nhập vào giờ(0-23h): ");
let phut = +prompt("mời nhập vào phút(0-59p): ");
let giay = +prompt("mời nhập vào giây(0-59s): ");
let format =(gio>12) ? `AM` : `PM`;
if(gio>12 && gio<=23 && phut>0 && phut <=59 && giay>0 && giay<=59){
    gio = gio%12;
    alert(`${gio}:${phut}:${giay} ${format}`);
}else if(gio>0 && gio<=12 && phut>0 && phut <=59 && giay>0 && giay<=59){
    gio = gio+12;
    alert(`${gio}:${phut}:${giay} ${format}`);
}else{
    alert(`Gia tri nhap vao khong hop le nhap vao giờ(0-23h),  phút(0-59p), giây(0-59s)`);
}