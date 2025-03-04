
let number = +prompt(`Nhập số tính toán: `);
if (number <= 0 || isNaN(number)) {
    alert(`Dữ liệu nhập vào không hợp lệ`);
} else {
    let thuong = '';
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            thuong += i + `,`;
        }
    }
    if (thuong === '') {
        alert(`Không có số nào từ 1 đến ${number} chia hết cho 5`);
    } else {
        alert(`Các số chia hết cho 5 từ 1 đến ${number} là: ${thuong}`);
    }
}