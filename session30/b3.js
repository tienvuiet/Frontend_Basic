let products = [
    {
        id: 1,
        name: "XSmax",
        price: 12000,
        quantity: 12,
        category: "iphone",
    },
    {
        id: 2,
        name: "Redmi note 13pro 5g",
        price: 12000,
        quantity: 15,
        category: "xiaomi",
    },
    {
        id: 3,
        name: "16promax 1T",
        price: 32000,
        quantity: 5,
        category: "iphone",
    },
    {
        id: 4,
        name: "turbo 4",
        price: 12100,
        quantity: 10,
        category: "xiaomi",
    },
];
let cart = [];
let choice = 0;
let soLuong = 0;
while (true) {
    choice = +prompt(`
        1.Hiển thị danh sách điện thoại theo thể hãng.
        2.Thêm điện thoại mới vào kho
        3.Tìm kiếm điện thoại theo tên hoặc id.
        4.Mua điẹn thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại kho).
        9.Thanh toán tất cả điện thoại trong giỏ hàng
        5.Sắp xếp điện thoại theo giá
        6.Hiển thị tổng số tiền của các điện thoại trong kho
        7.Hiển thị tổng số lượng điện thoại theo từng hàng trong kho.
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
        case 9:
            case9();
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
        1.Iphone
        2.Xiaomi`);
    let search1 = searchProduct === 1 ? "iphone" : "xiaomi";
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
        nameProduct = prompt(`Nhập vào tên điện thoại mới: `);
        let isDuplicate = products.some(item => item.name === nameProduct);
        if (!isDuplicate) {
            break;
        } else {
            alert(`Tên điện thoại đã tồn tại, vui lòng nhập lại!`);
        }
    }
    const priceProduct = Number(prompt(`Nhập vào giá điện thoại mới: `));
    const quantityProduct = Number(prompt(`Nhập vào số lượng điện thoại mới: `));
    let cateforyProduct;
    while (true) {
        cateforyProduct = prompt(`Nhập vào thể loại điện thoại mới (chỉ "iphone" hoặc "xiaomi"): `);
        if (cateforyProduct === "iphone" || cateforyProduct === "xiaomi") {
            break;
        } else {
            alert(`Nhập sai! Vui lòng nhập lại "iphone" hoặc "xiaomi".`);
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
        console.log(`điện thoại vừa tìm kiếm là: `);
        console.table(search);
    }
}
function case4() {
    console.log(`Tất cả các sản phẩm:`);
    console.table(products);
    const idProduct = +prompt(`Nhập id điện thoại muốn mua:`);
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
function case9(){
    console.log(`Thanh toán thành công!!`);
    cart = [];
    console.log(`giỏ hàng hiện tại: ${cart}`);
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
function case6(){
    let gia = 0;
    for(let item of products){
        gia += item.price;
    }
    console.log(`Tổng giá tiền của tất cả điện thoại là: ${gia}`);
}
function case7(){
    let soLuongIp = 0;
    let iphone = products.filter(item => item.category==="iphone");
    for(let item of iphone){
    soLuongIp += item.quantity;
    }
    console.log(`iphone - ${soLuongIp}`);
    let soLuongXiaomi = 0;
    let xiaomi = products.filter(item => item.category==="xiaomi");
    for(let item of xiaomi){
    soLuongXiaomi += item.quantity;
    }
    console.log(`xiaomi - ${soLuongXiaomi}`);
}