let arr = ["john.doe@gm ail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
if(arr.length===0){
    console.log(`Mang khong co phan tu nao`);
}else{
    // let check = arr.filter(function(element,index) {    
    //     return element.includes("@")&&!element.includes(" ");
    // })
    // console.log(check)
    let check = arr.filter(element => element.includes("@") && !element.includes(" "));
    console.log(check)
}


// .includes() là một phương thức trong JavaScript dùng để kiểm tra xem một chuỗi có chứa một chuỗi con nào đó hay không.