
let kiemtra = prompt("Nhập vào một chuỗi: "); 
alert(`Kết quả của quá trình kiểm tra là: ${check(kiemtra)}`);
function check(chuoi) {
    let chuoi2 = chuoi.split("").reverse().join(""); 
    if (chuoi === chuoi2) {
        return "Là chuỗi đối xứng";
    } else {
        return "Không là chuỗi đối xứng";
    }
}