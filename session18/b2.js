let toan = +prompt("nhập vào điểm môn toán: ");
let van = +prompt("nhập vào điểm môn văn: ");
let anh = +prompt("nhập vào điểm môn anh: ");
let trungbinh = (toan+van+anh)/3;
if(trungbinh>=8.0){
    alert(`giỏi`);
}else if(trungbinh>=6.5 && trungbinh<= 7.9){
    alert(`khá`);
}else if(trungbinh>=5 && trungbinh<=6.4){
    alert(`trung bình`);
}else{
    alert(`yếu`);
}