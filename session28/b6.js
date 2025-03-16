const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];
console.log(`Tổng tiền trong giỏ hàng là: `, tongtien());
function tongtien (){
    let tong = 0;
    for( let item of cart){
        tong+=item.price*item.quantity;
    }
    return tong;
}

