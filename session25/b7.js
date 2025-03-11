
let str = prompt("Nhập vào chuỗi bạn muốn chuyển đổi:");
alert(`Chuỗi sau khi chuyển đổi: ${chuyenDoi(str)}`);
function chuyenDoi(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) { 
            let cap = words[i][0].toUpperCase() + words[i].slice(1);
            result += cap + " "; 
        }
    }
    return result; 
}


// .split(" ") tách chuỗi thành các từ nếu gặp khoảng trắng thì tách ra
// .slice(1); cắt từ vị trí một đến hết từ ấy
