let a = +prompt("Mời bạn nhập số thứ nhất");
let b = +prompt("Mời bạn nhập số thứ hai ");
let result;
let allow= prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");
if (allow === "+") {
    result = a + b;
    alert("Kết quả của phép tính trên là: " + a + " + " + b + " = " + result);
} else if (allowa === "-") {
    result = a - b;
    alert("Kết quả của phép tính trên là:" + a + " - " + b + " = " + result);
} else if (allow=== "*") {
    result = a * b;
    alert("Kết quả của phép tính trên là: " + a + " * " + b + " = " + result);
} else if (allow === "/") {
    result = a / b;
    alert("Kết quả của phép tính trên là: " + a + " / " + b + " = " + result);
}