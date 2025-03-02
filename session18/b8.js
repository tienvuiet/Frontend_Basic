let a = +prompt(`Nhập vào cạnh thứ nhất: `);
let b = +prompt(`Nhập vào cạnh thứ hai: `);
let c = +prompt(`Nhập vào cạnh thứ ba: `);
if(Math.abs(b-c)<=a && a<=b+c || Math.abs(b-a)<=c && c<= a+b || Math.abs(a-c)<=b && b<=a+c){ 
    if(a===b && b===c){
        alert(`Đây là tam giác đều:`);
    }else if(a===b || b===c || c===a){
        alert(`Đây là tam giác cân:`);
    }else if(a*a + b*b == c*c || a*a + c*c == b*b || b*b+c*c == a*a){
        alert(`Đây là tam giác vuông:`);
    }else{
        alert(`Đây là tam giác thường....`);
    }
}else{
    alert(`Đây không tạo thành một tam giác!!!!`)
}