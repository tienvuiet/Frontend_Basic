let number = +prompt("SỐ lượng muốn output ra là: ");
let result = "";
if (isNaN(number) || number < 0) {
    alert(`Giá trị nhập vào không hợp lệ!!!!!`)
} else {
    let f1 = 1;
    let f2 = 1;
    let doi;
    result += f1 + ` `;
    if (number > 1) {
        result += f2 + ` `;
    }
    for (let i = 2; i < number; i++) {
        doi = f1 + f2;
        result += doi + ` `;
        f1 = f2;
        f2 = doi;
    }
}
alert(`cac gia trị đó là: ${result}`);