const products = [
    { id: 1, productName: `Quần áo`, condition: `Đang hoạt động` },
    { id: 2, productName: `Kính Mắt`, condition: `Ngừng hoạt động` },
];

const bangHien = document.getElementById("themDM2");
const themCart = document.getElementById("tbody");

let isEditing = false;
let editIndex = -1;

document.getElementById("themDM").onclick = function () {
    bangHien.style.display = "flex";
    isEditing = false; // Đảm bảo trạng thái là thêm mới khi mở form từ nút "Thêm danh mục mới"
    document.getElementById("them").textContent = "Thêm"; // Reset nút về "Thêm"
};

document.getElementById("thoat").onclick = function () {
    bangHien.style.display = "none";
};

function hienThiCart(productsToShow = products) {
    themCart.innerHTML = "";
    productsToShow.forEach((product, index) => {
        let the = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.productName}</td>
                <td>
                    <div id="hoatDong">• ${product.condition}</div>
                </td>
                <td>
                    <div id="chucNang">
                        <i class="fa-solid fa-trash" id="thungRac" onclick="deleteCart(${index})"></i>
                        <i class="fa-solid fa-pen" id="but" onclick="editCart(${index})"></i>
                    </div>
                </td>
            </tr>
        `;
        themCart.innerHTML += the;
    });
}

function deleteCart(index) {
    const xacNhan = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
    if (xacNhan) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        hienThiCart();
    }
}
function editCart(index) {
    const product = products[index];
    bangHien.style.display = "flex";
    document.getElementById("danhMuc").value = product.id;
    document.getElementById("danhMuc2").value = product.productName;
    if (product.condition === "Đang hoạt động") {
        document.getElementById("active").checked = true;
    } else if (product.condition === "Ngừng hoạt động") {
        document.getElementById("inactive").checked = true;
    }
    isEditing = true;
    editIndex = index;
    document.getElementById("them").textContent = "Cập nhật";
}

document.getElementById("them").addEventListener("click", () => {
    const maDanhMuc = document.getElementById("danhMuc").value.trim();
    const tenDanhMuc = document.getElementById("danhMuc2").value.trim();
    const trangThaiHD = document.getElementById("active").checked;
    const trangThaiKHD = document.getElementById("inactive").checked;

    if (maDanhMuc === "") {
        document.getElementById("dien1").style.display = "block";
        document.getElementById("danhMuc").style.border = "1px solid red";
        return;
    } else {
        document.getElementById("dien1").style.display = "none";
        document.getElementById("danhMuc").style.border = "1px solid #ced4da";
    }

    if (tenDanhMuc === "") {
        document.getElementById("dien2").style.display = "block";
        document.getElementById("danhMuc2").style.border = "1px solid red";
        return;
    } else {
        document.getElementById("dien2").style.display = "none";
        document.getElementById("danhMuc2").style.border = "1px solid #ced4da";
    }

    let trangThai = "";
    if (trangThaiHD) {
        trangThai = "Đang hoạt động";
    } else if (trangThaiKHD) {
        trangThai = "Ngừng hoạt động";
    } else {
        alert("Vui lòng chọn trạng thái");
        return;
    }

    if (isEditing) {
        products[editIndex] = {
            id: maDanhMuc,
            productName: tenDanhMuc,
            condition: trangThai,
        };
        isEditing = false;
        editIndex = -1;
        document.getElementById("them").textContent = "Thêm";
    } else {
        products.push({
            id: maDanhMuc,
            productName: tenDanhMuc,
            condition: trangThai,
        });
    }

    localStorage.setItem("products", JSON.stringify(products));
    hienThiCart();
    document.getElementById("danhMuc").value = "";
    document.getElementById("danhMuc2").value = "";
    document.getElementById("active").checked = false;
    document.getElementById("inactive").checked = false;
    bangHien.style.display = "none";
});

document.getElementById("huy").onclick = function () {
    document.getElementById("danhMuc").value = "";
    document.getElementById("danhMuc2").value = "";
    document.getElementById("active").checked = false;
    document.getElementById("inactive").checked = false;
    bangHien.style.display = "none";
    isEditing = false; // Reset trạng thái chỉnh sửa
    editIndex = -1;
    document.getElementById("them").textContent = "Thêm"; // Reset nút
};

document.getElementById("trangThai").onchange = function () {
    const selectedValue = document.getElementById("trangThai").value;
    let filteredProducts = [];
    if (selectedValue === "Đang hoạt động") {
        filteredProducts = products.filter(product => product.condition === "Đang hoạt động");
    } else if (selectedValue === "Ngừng hoạt động") {
        filteredProducts = products.filter(product => product.condition === "Ngừng hoạt động");
    } else {
        filteredProducts = products;
    }
    hienThiCart(filteredProducts);
};

hienThiCart();