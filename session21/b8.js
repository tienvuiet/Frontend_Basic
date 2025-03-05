
let num = +prompt(`Nhập vào số muốn kiểm tra: `);
if (Number.isInteger(num)) {
    let numbd = num;
    let dai = num.toString().length;
    let du;
    let tong = 0;
    
    for (let i = 0; i < dai; i++) {
        du = num % 10;           
        tong += Math.pow(du, 3); 
        num = Math.floor(num / 10);
    }
    
    if (tong === numbd) {
        alert(`Đây là số Armstrong`);
    } else {
        alert(`Đây không phải số Armstrong`);
    }
} else {
    alert(`Vui lòng nhập một số nguyên`);
}