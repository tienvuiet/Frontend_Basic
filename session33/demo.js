// B1: Thiết kế kho lưu trư dữ liệu mô phỏng
const products = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy A54",
    price: 7490000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
  },
  {
    id: 2,
    name: "Laptop Dell Inspiron 15",
    price: 15990000,
    image:
      "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
  },
  {
    id: 3,
    name: "Tai nghe AirPods Pro",
    price: 4990000,
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
  },
  {
    id: 4,
    name: "Đồng hồ thông minh Apple Watch",
    price: 8990000,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
  },
  {
    id: 5,
    name: "Máy ảnh Canon EOS M50",
    price: 12490000,
    image:
      "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
  },
  {
    id: 6,
    name: "Loa Bluetooth JBL Flip 5",
    price: 2190000,
    image:
      "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
  },
  {
    id: 7,
    name: "Bàn phím cơ Logitech G Pro",
    price: 2490000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
  },
  {
    id: 8,
    name: "Chuột không dây Logitech MX Master",
    price: 1890000,
    image:
      "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
  },
];

let cart = [
  //   {
  //     id: 8,
  //     name: "Chuột không dây Logitech MX Master",
  //     price: 1890000,
  //     image:
  //       "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
  //     number: 1,
  //   },
];

const productGrid = document.getElementById("product-grid");
const cartContainer = document.getElementById("cart-items");

// B2: Thực hiện tính năng R (Read/Render)
// B2.1: Chuyển đổi (Map, Ánh xạ) TOÀN BỘ đối tượng dữ liệu
// có trong mảng products
// ---> Thành các phần tử HTML và cho chúng xuất hiện

for (let product of products) {
  let productCard = `
    <div class="product-card">
        <img
            class="product-image"
            src="${product.image}"
        />
        <div class="product-title">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <button class="add-to-cart-btn" data-id="${product.id}">
            Thêm vào giỏ hàng
        </button>
    </div>
    `;
  // Cho các phần tử HTML này được xuất hiện ở trên trình duyệt
  // B2.2: Gọi product Grid
  // B2.3: Gắn các chuỗi định dạng HTML ở trên
  // vào làm nội dung là HTML bên trong product grid
  productGrid.innerHTML += productCard;
}

let addList = document.getElementsByClassName("add-to-cart-btn");
console.log(addList); // []
for (let i in addList) {
  addList[i].onclick = function () {
    //nước 2.6: Tìm ra được sản phẩm đang click vào
    //là sản phẩm nào
    let id = addList[i].getAttribute("data-id");
    //Tìm kiếm vị trí của sản phẩm
    let index = products.findIndex((element, index)=>element.id === +id)
    let inCartIndex = cart.findIndex((element, index)=>element.id === +id) 
    //bước 2.7: thêm sản phẩm đó vào bên trong giỏ hàng
    //kiểm tra sản phẩm đã có trong giỏ hàng chưa
    //nếu chưa ---> tạo ra sản phẩm với number: 1 --->thêm sản phẩm
    if(inCartIndex===-1){
      let cartProduct = {
        id: products[index].id,
        name: products[index].name,
        price: products[index].price,
        imageL: products[index].image,
        number: 1,
      };
      cart.push(cartPro)
    }
    //nếu rồi ---> tăng sản phẩm đó number++
    //bước 2.8: sử dụng đoạn logic đã được ràng buộc với 
    //mảng cart(đã có sự thay đổi- thêm mới)
    //để hiển thị ra sản phẩm xuất hiện trên trình duyệt

  };
}
// B2.4: Thực hiện tính năng render cho giỏ hàng
// B2.5: Kiểm tra xem mảng giỏ hàng (cart) có rỗng???
if (cart.length === 0) {
  // Nếu có ---> Hiển thị ra HTML (giỏ hàng rỗng)
  let div = `<div class="empty-cart">Giỏ hàng trống</div>`;
  cartContainer.innerHTML = div;
} else {
  // Nếu không --> Hiển thị ra HTML là các sản phẩm trong giỏ hàng
  for (let item of cart) {
    let cartItem = `
        <div class="cart-item">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-price">${item.price} x ${item.number}</div>
            </div>
            <div class="quantity-controls">
              <button class="quantity-btn decrease-btn" data-id="${item.id}">
                -
              </button>
              <span>${item.number}</span>
              <button class="quantity-btn increase-btn" data-id="${item.id}">
                +
              </button>
              <button class="remove" data-id="${item.id}">X</button>
            </div>
        </div>
    `;

    cartContainer.innerHTML += cartItem;
  }
}