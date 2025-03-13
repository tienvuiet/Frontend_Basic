let n = +prompt(`Nhập vào một số nguyên bất kì: `);
if(Number.isInteger(n)){
    console.log(`trả về số lớn nhất có thể tạo từ các chữ số của số ${n}: `,tachSo(n));
}
function tachSo(n){
    let result =  n.toString().split('').map(Number);
    result.sort();
    return result.reverse().join("");
}
