// B1:
// Xây dựng kho lưu trữ dữ liệu mô phỏng

const photoList = [
    {
      id: 1,
      url: "https://iv1cdn.vnecdn.net/giaitri/images/web/2024/12/01/viruss-koc-can-nang-cao-kien-thuc-1733024119.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=ascbnfBuErcPSWxy81_hcA",
    },
    {
      id: 2,
      url: "https://golives3.s3.amazonaws.com/2022/10/10770_76364ed7bc15929749bcd1b4d921bcae.png",
    },
    {
      id: 3,
      url: "https://cafefcdn.com/203337114487263232/2024/9/16/46021177382704768530210411814881767028442024n-1726468581928522389118-1726470486350-17264704866681777023895-1726476969080-1726476969270541782104.jpg",
    },
  ];
  
  let container = document.getElementById("container");
  let modal = document.getElementById("modal");
  let img = document.getElementsByTagName("img")[0];
  
  // B0: Ẩn lớp phủ đi
  modal.style.display = "none";
  
  // B2: Tính năng render (read)
  // --> Chuyển đổi toàn bộ các đối tượng dữ liệu
  // thành phần tử HTML --> Xuất hiện ở trên trình duyệt
  
  // B2.1: Duyệt qua toàn bộ mảng photoList
  for (let i in photoList) {
    // B2.2: Chuyển đổi các đối tượng dữ liệu thành HTML
    let div = `<div class="img" style="background-image: url(${photoList[i].url})"></div>`;
  
    // B2.3: Nối các chuỗi với định dạng HTML vừa tạo ra từ dữ liệu
    // vào làm nội dung bên trong là HTML của container
  
    container.innerHTML += div;
    //   container.innerHTML = container.innerHTML + div;
  }
  // B3: Xây dựng cấu trúc HTML dành cho lớp phủ
  // B4: Gọi tập hợp thẻ div(img) ra và gắn sự kiện onclick
  let divList = document.getElementsByClassName("img");
  
  for (let i = 0; i < divList.length; i++) {
    divList[i].onclick = function () {
      // B5: Hiển thị ra modal
      modal.style.display = "flex";
      // B6: Trích xuất được url của hình ảnh đang bấm vào
      let url = divList[i].style.backgroundImage;
  
      url = url.replace(`url("`, "");
      url = url.replace(`")`, "");
  
      // B7: Gắn url đó vào làm src của hình ảnh bên trong modal
      img.src = url;
    };
  }
  
  // Khi click vào modal thì đóng hình ảnh lại
  modal.onclick = function () {
    modal.style.display = "none";
  };