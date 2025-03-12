let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]]
let cart = [];
let menu = `
-----------MENU------------
1.Hien thi danh sach san pham
2.Mua hang
3.Hoa đơn + Tổng tiền
4.Thoát
Mời bạn nhạp vào sự lựa chọn của bạn: 
`;
// b2:hỏi người ding chọn gì
let input
while (input !== 4) {
    input = +prompt(menu);
    switch (input) {
        case 1://hiển thị san phẩm
            //duyẹt qua mang product
            displayProduct(products);
            break;
        case 2://mua hang
            // b4 cho người dungf nhập tên sản phảm muốn mua 
            let productName = prompt(`Mời nhập tên sản phẩm muốn mua: `);
            // b5 tìm kiếm xem sp có tồn tại trong store không
            let fingIndex = -1;
            for (let i in products) {
                if (productName === products[i][0]) {
                    fingIndex = i;
                    break;
                }
            }
            // b6 nếu không -----> làm đéch có
            if (fingIndex === -1) {
                console.log(`Không tồn tại sản phẩm này`);
            } else {
                // b7: nếu có -->product đến việc mua hàng
                let inCartIndex = -1
                for (let i in cart) {
                    if (productName === cart[i][0]) {
                        inCartIndex = i;
                        break;
                    }
                    if (inCartIndex === -1) {
                        // b10 nếu chưa thêm sản phẩm đó với sl 1 
                        let buyProduct = products[fingIndex];
                        let addProduct = [buyProduct[0], 1, buyProduct[2]];
                        cart.push(addProduct);
                    } else {
                        cart[inCartIndex][1]+=1;
                    }
                    products[fingIndex][1]--;
                }
            }
            break;
        case 3:
            displayProduct(cart);
            let sum = 0; 
            for(let product of cart){
                sum+=product[1]*product[2];
            }
            console.log(`Tổng bill = `, sum);
            break;
        case 4://thoat
            console.log("Thank you for visiting our shop");
            break;
        default://khong hop le
            console.log(`không hợp lệ`);
            break;
    }
}
function displayProduct(productList) {
    for (let i in productList) {
        console.log(`${+i + 1}.${productList[i][0]}-${productList[i][1]}-${productList[i][2]}`);
    }
}