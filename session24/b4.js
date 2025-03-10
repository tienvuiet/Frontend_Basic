let arr = [];
let choice;
let cols;
let rows;
while (true) {
    choice = +prompt(`
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình`);
    switch (choice) {
        case 1:
            cols = +prompt(`Nhập vào số cột của mảng:`);
            rows = +prompt(`Nhập vào số hàng của mảng:`);
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    let input = +prompt(`Nhập giá trị cho phần tử [${i}][${j}]:`);
                    row.push(input);
                }
                arr.push(row);
            }
            alert("Mảng đã được nhập thành công!");
            break;
        case 2:
            if (arr.length === 0) {
                alert("Bạn cần nhập mảng trước!");
            } else {
                alert("Mảng hai chiều:");
                let output = "";
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        output += arr[i][j] + " ";
                    }
                    output += "\n";
                }
                alert(output);
            }
            break;
        case 3:
            let tong = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    tong += arr[i][j];
                }
            }
            alert(`tổng các giá trị trong mảng là: ${tong}`);
            break;
        case 4:
            let max = arr[0][0];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                    }
                }
            }
            alert(`giá trị lớn nhất trong mảng là: ${max}`);
        case 5:
            alert("Mảng hai chiều:");
            let outputt = "";
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    outputt += arr[i][j] + " ";
                }
                outputt += "\n";
            }
            alert(outputt);
            let luachon=+prompt(`nhập vào lựa chọn tính tong cot or tong hang:`)
            if(luachon === "hang"){
                let hang = +prompt("Nhập vào hàng muốn tính trung bình cộng: ");
                if (hang >= 0 && hang < arr.length) {
                    let tongg = 0;
                    for (let j = 0; j < arr[hang].length; j++) {
                        tongg += arr[hang][j];
                    }
                    let trungbinh = tongg / arr[hang].length;
                    alert(`Trung bình cộng của mảng ở hàng ${hang} là: ${trungbinh}`);
                } else {
                    alert("Hàng không hợp lệ!");
                }
            }else{
                let cot = +prompt("Nhập vào cột muốn tính trung bình cộng: ");
                if (cot >= 0 && cot < arr.length) {
                    let tonggg = 0;
                    for(let i =0; i<arr.length; i++)
                    for (let j = 0; j < arr[cot].length; j++) {
                        tonggg += arr[i][cot];
                    }
                    let trungbinhh = tonggg / arr[cot].length;
                    alert(`Trung bình cộng của mảng ở cột ${cot} là: ${trungbinhh}`);
                } else {
                    alert("Cột không hợp lệ!");
                }
            }
            break;
        case 6:
            alert("Mảng hai chiều:");
            let outputtt = "";
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    outputtt += arr[i][j] + " ";
                }
                outputtt += "\n";
            }
            alert(outputtt);
            alert(`Mảng sau khi đảo ngược hàng`)
            let outputttt = "";
            for (let i = arr.length-1; i >=0; i--) {
                for (let j = 0; j < arr[i].length; j++) {
                    outputttt += arr[i][j] + " ";
                }
                outputttt += "\n";
            }
            alert(outputttt);
            break;
        case 7:
            alert(`thoát chương trình!!!`);
            break;
        default:
            alert(`Giá trị nhập vào không hợp lệ`);
            break;
    }
    if (choice === 7) {
        break;
    }
}

