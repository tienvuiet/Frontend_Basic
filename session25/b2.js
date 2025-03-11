let number1 = +prompt(`Nhập vào số thứ nhất: `);
let number2 = +prompt(`Nhập vào số thứ hai: `);
if(!Number.isInteger(number1)||!Number.isInteger(number2)){
    alert(`Dữ liệu không hợp lệ `);
}else{
    alert(`tông là: `+ sum(number1, number2))
    
}
function sum (gt1, gt2){
    return gt1+gt2;
}