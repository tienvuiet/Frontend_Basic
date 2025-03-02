let a = +prompt(`Mời bạn nhập vào số a:`);
let b = +prompt(`Mời bạn nhập vào số b:`);
let pheptinh = prompt(`Mời bạn nhập vào phép tính (+,-,*,/) :`);
if(pheptinh=== "+"){
    let tong = a+b;
    alert(`kết quả của phép tính là: a+b=` + tong);
}else if(pheptinh === "-"){
    let hieu = a-b;
    alert(`kết quả của phép tính trên là: a-b=` + hieu);
}else if(pheptinh === "*"){
    let nhan = a*b;
    alert(`kết quả của phép tính trên là: a*b=` +nhan);
}else if(pheptinh === "/"){
    let chia = a/b;
    alert(`kết quả của phép tính trên là: a/b=` +chia);
}