let products = [
    {
        id: 1,
        name: "Conan",
        price: 12000,
        quantity: 12,
        category: "Trinh thám",
    },
    {
        id: 2,
        name: "Dragonball",
        price: 12000,
        quantity: 15,
        category: "Phiêu lưu",
    },
    {
        id: 3,
        name: "superman",
        price: 32000,
        quantity: 5,
        category: "Trinh thám",
    },
    {
        id: 4,
        name: "one pice",
        price: 12100,
        quantity: 10,
        category: "Phiêu lưu",
    },
];
let cart = [];
let choice = 0;
let soLuong = 0;

while (true) {
    choice = +prompt(`
        1.Hiển thị danh sách sách theo thể loại.
        2.Thêm sách mới vào kho
        3.Tìm kiếm sách theo tên hoặc id.
        4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5.Sắp xếp sách theo giá
        6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7.Hiển thị tổng số lượng sách trong kho.
        8.Thoát chương trình.`)
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
            case6();
            break;
        case 7:
            case7();
            break;
        case 8:
            alert(`Đã thoát chương trình!!!`);
            break;
    }
    if (choice === 8) {
        break
    }
}
function case1() {
    let searchProduct = +prompt(`
        Bạn có những thể loại:
        1.Trinh thám
        2.Phiêu lưu`);
    let search1 = searchProduct === 1 ? "Trinh thám" : "Phiêu lưu";
    let filteredProducts = products.filter(item => item.category === search1);
    if (filteredProducts.length > 0) {
        console.log(`Các sản phẩm trong danh mục "${search1}" là:`);
        console.table(filteredProducts);
    } else {
        console.log(`Không có sản phẩm nào trong danh mục "${search1}".`);
    }
}
function case2() {
    let nameProduct;
    while (true) {
        nameProduct = prompt(`Nhập vào tên sách mới: `);
        let isDuplicate = products.some(item => item.name === nameProduct);
        if (!isDuplicate) {
            break;
        } else {
            alert(`Tên sách đã tồn tại, vui lòng nhập lại!`);
        }
    }
    const priceProduct = Number(prompt(`Nhập vào giá sách mới: `));
    const quantityProduct = Number(prompt(`Nhập vào số lượng sách mới: `));
    let cateforyProduct;
    while (true) {
        cateforyProduct = prompt(`Nhập vào thể loại sách mới (chỉ "Trinh thám" hoặc "Phiêu lưu"): `);
        if (cateforyProduct === "Trinh thám" || cateforyProduct === "Phiêu lưu") {
            break;
        } else {
            alert(`Nhập sai! Vui lòng nhập lại "Trinh thám" hoặc "Phiêu lưu".`);
        }
    }
    const productNew = {
        id: Math.ceil(Math.random() * 1000),
        name: nameProduct,
        price: priceProduct,
        quantity: quantityProduct,
        category: cateforyProduct,
    };
    products.push(productNew);
    alert(`Thêm sản phẩm thành công!!`);
    console.log("Sản phẩm mới đã được thêm:", productNew);
}
function case3() {
    console.table(products);
    let idSearch = +prompt(`Nhập vào id muốn tìm kiếm: `);
    let search = products.filter(item => item.id === idSearch);
    if (search.length > 0) {
        console.log(`sản phẩm vừa tìm kiếm là: `);
        console.table(search);
    }
}
function case4() {
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
                cart = item.price * quantitysProduct;
                soLuong += quantitysProduct;
                item.quantity = item.quantity - quantitysProduct;
                console.log(`Đã mua thành công!!`);
                console.table(products);
            }
        }
    }
}
function case5() {
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
function case6() {
    console.log(`Tổng số lượng sách đã mua là: ${soLuong}`);
    console.log(`Tổng số tiền đẫ mất trong của hàng này là: ${cart}`);
}
function case7() {
    let soLuongCuoi = 0;
    for (let item of products) {
        soLuongCuoi += item.quantity;
    }
    console.log(`các sản phẩm còn lại trong cửa hàng là: ${soLuongCuoi}`);
}