
let jods = [    
    {
        id : 1,
        congViec: "phụ hồ",
    },
    {
        id : 2,
        congViec: "Thợ lặn",
    },
    
]
const themCart = document.getElementById("hienThi1");
function hienThiJods() {
    themCart.innerHTML = ""; 
    jods.forEach((job, index) => {
        let carts = `
            <div id="hienThi">
                <p>${job.congViec}</p>
                <div id="chucNang">
                    <button class="sua" onclick="suaCongViec(${index})">Sửa</button>
                    <button class="xoa" onclick="xoaCongViec(${index})">Xóa</button>
                </div>
            </div> 
        `;
        themCart.innerHTML += carts;
    });
}
hienThiJods();
document.getElementById("them").onclick = function () {
    const nhapCv = document.getElementById("input").value.trim();
    if (nhapCv === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }
    jods.push({ id: jods.length + 1, congViec: nhapCv });
    localStorage.setItem("jods", JSON.stringify(jods));
    hienThiJods();
    document.getElementById("input").value = "";
};

function xoaCongViec(index) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa công việc này?");
    if (confirmDelete) {
        jods.splice(index, 1);
        localStorage.setItem("jods", JSON.stringify(jods));
        hienThiJods();
    }
}
function suaCongViec(index) {
    let newValue = prompt("Nhập công việc mới:", jods[index].congViec);
    if (newValue !== null && newValue.trim() !== "") {
        jods[index].congViec = newValue.trim();
        localStorage.setItem("jods", JSON.stringify(jods));
        hienThiJods();
    }
}
