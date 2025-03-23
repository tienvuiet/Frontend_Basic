let dish = [
    {
        name: `Rau sạch`,
        category: `Đồ ăn`,
    },
    {
        name: `Thịt lợn`,
        category: `Đồ ăn`,
    },
    {
        name: `Pépi không calo`,
        category: `Nước`,
    },
    {
        name: `Cocacola`,
        category: `Nước`,
    },
    {
        name: `Cờ lê`,
        category: `Dụng cụ`,
    },
    {
        name: `Tuy vít`,
        category: `Dụng cụ`,
    }
]

let food
document.getElementById("loc").onclick = function () {
    let luaChon = document.getElementById("luaChon").value;
    let danhSach = document.getElementById("danhSach");
    danhSach.innerHTML = "";
    for (let index of dish) {
        if (index.category === luaChon) {
            food = document.createElement("li");
            food.innerHTML = `
            <b>Tên đồ ăn: </b>${index.name}-<b>Danh mục:</b>${index.category}
            `
            danhSach.appendChild(food);
        }
    }
}



