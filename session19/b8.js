let month = +prompt(`Nhập vào tháng muốn kiểm tra: `);
switch (month) {
    case 1: case 2: case 3:
        alert(`Mùa Xuân`);
        break;
    case 4: case 5: case 6:
        alert(`Mùa Hè`);
        break;
    case 7: case 8: case 9:
        alert(`Mùa Thu`);
        break;
    case 10: case 11: case 12:
        alert(`Mùa Đông`);
        break;
}