let a = +prompt(`Nhập vào số thứ nhất: `);
let b = +prompt(`Nhập vào số thứ hai: `);
let c = +prompt(`Nhập vào số thứ ba: `);
let max=a;
max = (b > max) ? b : max; 
max = (c > max) ? c : max;
alert(`Số lớn nhất trong ba số là: ${max}`);