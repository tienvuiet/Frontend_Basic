
let min = parseFloat(prompt("nhap vao so thu nhat: "));
let max = parseFloat(prompt("nhap vao so thu hai: "));
let kq = Math.floor(Math.random() * (max-min-2+1)) + (min+1);
alert(kq);