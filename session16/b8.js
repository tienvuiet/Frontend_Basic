let so1 = parseFloat(prompt("nhap vao so thu nhat: "));
let so2 = parseFloat(prompt("nhap vao so thu hai: "));
let so3 = parseFloat(prompt("nhap vao so thu ba: "));
// var max = so1;
// max < so2;
// var max = so2;
// max < so3;
// var max = so3;
// // âfsfads
// alert(max);
var max = so1;
if(max<so2){
    max=so2;
}else if(max<so3){
    max=so3;
}
alert(max);