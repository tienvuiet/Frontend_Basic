let password = `tiendeptrai`;
let input = prompt(`Nhập vào mật khẩu: `);
if(input===password){
    alert(`Bạn đã nhập đúng!!!!`);
}else{
    alert(`bạn đã nhập sai hãy nhập lại!!`);
    while(input!==password){
        input = prompt(`Nhập vào mật khẩu: `);
        if(input===password){
            alert(`Bạn đã nhập đúng!!!!`);
            break;
        }
    }
}
