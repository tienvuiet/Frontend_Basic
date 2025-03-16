//B1: Tạo menu (dùng vòng lặp do-While)
//B1.1: Hiển thị lựa chọn menu cho người dùng
//B1.2: Lấy lưạ chọn của người dùng

//B2: Kiểm tra lựa chọn của người dùng

//B3: Thực hiện các logic bên trong tưng trường hợp

let choice = 0;
let menu = `
    1.Thêm sản phẩm
    2.Sửa thông tin sản phẩm
    3.Xóa sản phẩm theo id
    4.In danh sách sản phẩm
    5.Tìm kiếm sản phẩm theo tên
    6.Thoát chương trình
    Mời nhập bạn lựa chọn:
`;
const products = [];
do {
    choice = +prompt(menu);

    switch (choice) {
        case 1:
            //Lấy được thông tin sản phẩm từ người dùng
            const productNameInput = prompt("Mời bạn nhập tên sản phẩm");
            const productPriceInput = +prompt("Nhập giá sản phẩm");

            //Gom nhóm tất cả dữ liệu từ người dùng thành 1 object duy nhất
            const newProduct = {
                id: Math.ceil(Math.random() * 1000000000000000),
                productName: productNameInput,
                price: productPriceInput,
            };

            //Push đối tượng newProduct vào trong một mảng
            products.push(newProduct);

            //Hiển thị thông báo
            alert("Thêm sản phẩm thành công");
            break;
        case 2:
            break;
        case 3:
            //Lấy được id cần xóa
            const idDelete = +prompt("Mời bạn nhập id của sản phẩm cần xóa");

            //Tìm kiếm vị trí phần tử trong mảng theo id
            const findIndexProductDelete = products.findIndex((products) => products.id === idDelete);
            //Kiểm tra xem id đó có tồn tại hay không?
            if (findIndexProductDelete !== -1) {
                //Lấy ra tên của sản phẩm cần xóa
                const productNameDelete = products[findIndexProductDelete].productName;
                //Lấy xác nhận xóa từ người dùng
                const confirmDelete = confirm(`Bạn có chắc chắn xóa sản phẩm tên là ${productNameDelete} này không?`);
                if (confirmDelete === true) {
                    //Tiến hành xóa
                    products.splice(findIndexProductDelete, 1);
                }
                //hiển thị thông báo
                alert("xóa sản phẩm thành công");
            } else {
                alert("Không tìm thấy sản phẩm");
            }
            products.splice()
            break;
        case 4:
            console.table(products);
            break;
        case 5:
            break;
        case 6:
            alert("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            alert("Lựa chọn chưa hợp lệ");
            break;
    }
} while (choice !== 6);