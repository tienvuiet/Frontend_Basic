let ten = prompt("hãy nhập tên: ");
if(ten==="ADMIN"){
    let matkhau = prompt("Yêu cầu nhập mật khẩu: ");
    if(matkhau==="TheMaster"){
        alert(`Welcome`);
    }else if(matkhau===null || matkhau===""){
        alert(`Cancelled`);
    }else{
        alert(`Wrong password`);
    }
}else if(ten===null || ten===""){
    alert(`Cancelled`);
}else{
    alert(`I Don’t know you`);
}