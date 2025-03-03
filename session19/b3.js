let usd = +prompt(`VND-->USD: `);
let vnd = +prompt(`USD-->VND: `);
if (isNaN(usd) || isNaN(vnd)) {
    alert(`Vui lòng nhập số hợp lệ`);
}
else if (usd >= 0) {
    let tien = usd / 23000;
    alert(`${tien} USD`);
    if (vnd >= 0) {
        let tien = vnd * 23000;
        alert(`${tien} VND`);
    }
}
