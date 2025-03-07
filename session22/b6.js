let numbers = [1,2,3,4,5,3,4,6,,7,8,9];
let dem = 0;
let giatri = +prompt(`Nhập vào giá trị muốn kiểm tra: `);
for( let i =0; i< numbers.length; i++){
    if(giatri===numbers[i]){
        dem++;
    }
}
if(dem===0){
    alert(`số ${giatri} không tồn tại trong mảng!!!`);
}else{
    alert(`Số ${giatri} tồn tại ${dem} lần... `);
}