let choice = 0;
let products = [];
let menu = `
1. Thêm nhân viên mới.
2. In thông tin nhân viên.
3. Xóa nhân viên theo ID.
4. Cập nhật mức lương của nhân viên theo ID.
5. Tìm kiếm nhân viên theo tên.
6. Thoát.
Mời bạn lựa chọn:
`;
do {
    choice = +prompt(menu);
    switch (choice) {
        case 1: {
            const nameProduct = prompt("Mời bạn nhập tên nhân viên mới:");
            const position = prompt("Mời bạn nhập chức vụ:");
            const salary = +prompt("Mời bạn nhập mức lương của nhân viên:");
            const productNew = {
                id: Math.ceil(Math.random() * 1000), 
                name: nameProduct,
                position: position,
                salary: salary,
            };
            products.push(productNew);
            alert("Thêm nhân viên thành công!");
            break;
        }
        case 2: {
            console.table(products);
            break;
        }
        case 3: {
            const idDelete = +prompt("Mời bạn nhập ID nhân viên cần xóa:");
            const findIndexProductDelete = products.findIndex((product) => product.id === idDelete);
            if (findIndexProductDelete !== -1) {
                const confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${products[findIndexProductDelete].name} không?`);
                if (confirmDelete) {
                    products.splice(findIndexProductDelete, 1);
                    alert("Xóa nhân viên thành công!");
                } else {
                    alert("Bạn đã hủy xóa.");
                }
            } else {
                alert("Không tìm thấy nhân viên có ID này.");
            }
            break;
        }
        case 4: {
            const idUpdate = +prompt("Mời bạn nhập ID nhân viên cần cập nhật lương:");
            const findProductUpdate = products.find((product) => product.id === idUpdate);
            if (findProductUpdate) {
                const newSalary = +prompt(`Mức lương hiện tại của ${findProductUpdate.name} là ${findProductUpdate.salary}. Nhập mức lương mới:`);
                findProductUpdate.salary = newSalary;
                alert("Cập nhật lương thành công!");
            } else {
                alert("Không tìm thấy nhân viên có ID này.");
            }
            break;
        }
        case 5: {
            const nameSearch = prompt("Nhập tên nhân viên cần tìm:");
            const result = products.filter((product) => product.name.toLowerCase().includes(nameSearch.toLowerCase()));
            if (result.length > 0) {
                console.table(result);
            } else {
                alert("Không tìm thấy nhân viên có tên như vậy.");
            }
            break;
        }
        case 6: {
            alert("Đã thoát chương trình!");
            break;
        }
        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 6);