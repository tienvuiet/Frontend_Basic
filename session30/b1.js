let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 2000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "Cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "Bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    },
];
let cart = [];
let choice = 0;
while (true) {
    choice = +prompt(`
        1. Hiển thị các sản phẩm theo danh mục
        2. Chọn sản phẩm để mua bằng cách nhập ID sản phẩm
        3. Sắp xếp các sản phẩm theo giá
        4. Tính số tiền thanh toán trong giỏ hàng
        5. Thoát
    `);
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
            alert(`Đã thoát chương trình!!!`);
            break;
    }
    if (choice === 5) {
        break;
    }
}
function case1() {
    let luaChon = +prompt(`
        Nhập vào danh mục muốn tìm:
        1. Món ăn dân tộc Mông
        2. Món ăn dân tộc Kinh
    `);
    let danhMuc = luaChon === 1 ? "món ăn dân tộc Mông" : "món ăn dân tộc Kinh";
    let filteredProducts = products.filter(item => item.category === danhMuc);
    if (filteredProducts.length > 0) {
        console.log(`Các sản phẩm trong danh mục "${danhMuc}" là:`);
        console.table(filteredProducts);
    } else {
        console.log(`Không có sản phẩm nào trong danh mục "${danhMuc}".`);
    }
}
function case2() {
    console.log(`Tất cả các sản phẩm:`);
    console.table(products);
    const idProduct = +prompt(`Nhập id sản phẩm muốn mua:`);
    let filteredProducts = products.filter(item => item.id === idProduct);
    if (filteredProducts.length === 0) {
        console.log(`Sẩn phẩm không có trong của hàng!!!`);
    } else {
        const quantitysProduct = +prompt(`Nhập vào số lượng sản phẩm muốn mua:`);
        for (let item of filteredProducts) {
            if (quantitysProduct <= 0) {
                console.log(`Số lượng sản phẩn không hợp lệ!!!`)
            }
            else if (item.quantity >= quantitysProduct) {
                cart = item.price*quantitysProduct;
                item.quantity = item.quantity - quantitysProduct;
                console.log(`Đã mua thành công!!`);
                console.table(products);
            }
        }
    }
}
function case3() {
    let luaChon3 = +prompt(`
        Sắp xếp các sản phẩm trong cửa hàng theo giá:
        1. Tăng dần.
        2. Giảm dần.`);
    if (luaChon3 === 1) {
        products.sort((a, b) => a.price - b.price); 
        console.log(`Sắp xếp các sản phẩm theo giá tăng dần:`);
    } else if (luaChon3 === 2) {
        products.sort((a, b) => b.price - a.price); 
        console.log(`Sắp xếp các sản phẩm theo giá giảm dần:`);
    } else {
        console.log(`Lựa chọn không hợp lệ!`);
        return;
    }
    console.table(products);
}
function case4(){
    console.log(`tổng số tiền sản phẩm đã mua là: ${cart}`);
}