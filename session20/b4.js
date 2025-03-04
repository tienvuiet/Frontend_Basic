let str = prompt(`Nhập vào một chuỗi bất kì:`);
let char = prompt(`Nhập vào ký tự muốn tìm kiếm:`);
let dai = str.length;
let tonTai = false; 

for (let i = 0; i < dai; i++) {
    if (char === str[i]) {
        tonTai = true; 
        break;
    }       
}

if (tonTai ===true) {
    alert(`Ký tự "${char}" tồn tại trong chuỗi`);
} else {
    alert(`Ký tự "${char}" không tồn tại trong chuỗi`);
}