let choice = 0;
let products = [];
while (true) {
    choice = +prompt(`
        1.Thêm sản phẩm vào danh sách sản phẩm.
        2.Hiển thị tất cả sản phẩm.
        3.Hiển thị chi tiết sản phẩm theo id.
        4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5.Xóa sản phẩm theo id.
        6.Lọc sản phẩm theo khoảng giá.
        7.Thoát.`);
    switch (choice) {
        case 1:
            case1();
            break
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
            case6();
            break;    
        case 7:
            alert(`Bạn đã thoát chương trình`);
            break;
        default:
            alert(`Lựa chọn không hợp lệ!!!`);
            break;
    }
    if (choice === 7) {
        break;
    }
}
function case1() {
    const nameProduct = prompt(`Nhập vào tên sản phẩm: `);
    const priceProduct = prompt(`Nhập vào giá của sản phẩm: `);
    const categoryProduct = prompt(`Nhập tên danh mục sản phẩm: `);
    const quantityProduct = prompt(`Nhập vào số lượng sản phẩm trong kho: `);
    const productNew = {
        id: Math.ceil(Math.random() * 1000),
        name: nameProduct,
        price: priceProduct,
        category: categoryProduct,
        quantity: quantityProduct,
    };
    products.push(productNew);
    alert(`Thêm product thành công!!`);
}
function case2() {
    console.log(`Tất cả các sản phẩm của của hàng: `)
    for (let product of products) {
        console.log(product.name);
    }
}
function case3() {
    console.table(products);
    const idSearch = +prompt(`Nhập vào id muốn tìm kiếm: `);
    const result = products.filter((object) => object.id === idSearch);
    if (result.length > 0) {
        console.log(`Thông tin chi tiết của product có id ${idSearch} là: `);
        console.table(result);
    } else {
        alert(`Không tìm thấy sản phẩm có id ${idSearch}`);
    }
}
function case4() {
    const idUpdate = +prompt(`Nhập vào idProduct cần cập nhật:`);
    const findProductUpdate = products.find((object) => object.id === idUpdate);
    if (findProductUpdate) {
        const nameUpdate = prompt(`tên product ban đầu của bạn là ${findProductUpdate.name}. Nhập tên muốn update:  `);
        findProductUpdate.name = nameUpdate;
        const priceUpdate = +prompt(`price contact ban đầu của bạn là ${findProductUpdate.price}. Nhập email muốn update:  `);
        findProductUpdate.price = priceUpdate;
        const categoryUpdate = prompt(`category contact ban đầu của bạn là ${findProductUpdate.category}. Nhập phone muốn update:  `);
        findProductUpdate.category = categoryUpdate;
        const quantityUpdate = prompt(`quantity contact ban đầu của bạn là ${findProductUpdate.quantity}. Nhập phone muốn update:  `);
        findProductUpdate.quantity = quantityUpdate;
        alert(`Cập nhật thành công!!`);
    } else {
        alert(`Không tìm thấy liên hệ có id ${idUpdate}!`);
    }
}
function case5() {
    const idDelete = +prompt(`Nhập vào idProduct muốn xóa:`);
    const findIndexProductDelete = products.findIndex((product) => product.id === idDelete);
    if (findIndexProductDelete !== -1) {
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa contact có id là ${objects[findIndexObjectDelete].id} không`);
        if (confirmDelete) {
            products.splice(findIndexProductDelete, 1);
            alert(`Xóa product thành công!!`);
        } else {
            alert(`Bạn đã hủy xóa!!`);
        }
    } else {
        alert(`Không tìm thấy product có id ${idDelete}.`);
    }
}
function case6() {
    const maxPrice = +prompt(`Nhập vào giá lớn nhất trong khoảng: `);
    const minPrice = +prompt(`Nhập vào giá nhỏ nhất trong khoảng: `);
    const result = products.filter((product) => product.price >= minPrice && product.price <= maxPrice)
    if (result.length > 0) {
        console.log(`Những sản phẩm thuộc khoảng giá ${minPrice} đến ${maxPrice} là: `);
        console.table(result);
    } else {
        alert(`Không tìm thấy sản phẩm theo khoảng giá ${minPrice} đến ${maxPrice} là:`);
    }
}