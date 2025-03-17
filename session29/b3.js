let choice = 0;
let dishs = [];
while (true) {
    choice = +prompt(`
        1.Thêm món ăn vào danh mục.
        2.Xóa món ăn theo tên khỏi danh mục.
        3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
        4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6.Thoát`);
    switch (choice) {
        case 1:
            case1();
            break;
        case 2:
            case2();
            break;
        case 3:
            case3();
            break;
        case 4:
            case4();
            break;
        case 5:
            case5();
            break;
        case 6:
            alert(`Đã thoát chương trình!!`);
            break;
    }
    if (choice === 6) {
        break;
    }
}
function case1() {
    const nameDish = prompt(`Nhập vào tên món ăn: `);
    const priceDish = +prompt(`Nhập vào giá của món ăn: `);
    const describeDish = prompt(`Trạng thái mô tả món ăn: `);
    const dishNew = {
        dish: nameDish,
        price: priceDish,
        describe: describeDish,
    };
    dishs.push(dishNew);
    alert(`Thêm món ăn thành công`);
}
function case2() {
    console.table(dishs);
    const nameDelete = prompt(`Nhập vào tên món ăn muốn xóa: `);
    const indexToDelete = dishs.findIndex(item => item.dish === nameDelete);
    if (indexToDelete !== -1) {
        dishs.splice(indexToDelete, 1);
        alert(`Đã xóa món ăn: ${nameDelete}`);
    } else {
        alert(`Món ăn ${nameDelete} không tồn tại trong danh mục.`);
    }
    console.table(dishs);
}
function case3() {
    const nameUpdate = prompt(`Nhập vào tên món ăn muốn cập nhật là: `);
    const findProductUpdate = dishs.find((item) => item.dish === nameUpdate);
    if (findProductUpdate) {
        const dishUpdate = prompt(`tên dish ban đầu của bạn là ${findProductUpdate.dish}. Nhập tên muốn update:  `);
        findProductUpdate.dish = dishUpdate;
        const priceUpdate = +prompt(`price contact ban đầu của bạn là ${findProductUpdate.price}. Nhập price muốn update:  `);
        findProductUpdate.price = priceUpdate;
        const describeUpdate = prompt(`describe contact ban đầu của bạn là ${findProductUpdate.describe}. Nhập describe muốn update:  `);
        findProductUpdate.describe = describeUpdate;
        alert(`Cập nhật thành công!!`);
    }
    else {
        alert(`Không nhìn thấy tên món ăn:`);
    }
}
function case4(){
    console.table(dishs);
}
function case5(){
    const nameSearch = prompt(`Nhập vào tên món ăn muốn tìm kiếm: `);
    const indexSearch = dishs.findIndex(item => item.dish === nameSearch);
    console.table(dishs[indexSearch]);
}