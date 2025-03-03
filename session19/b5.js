let chuoi = prompt(`Nhập vào chuỗi muốn kiểm tra: `);
if(chuoi.length>0){ 
    if(chuoi.includes(` `)=== true){
        alert(`Chuỗi chứa dấu cách:`);
    }else{
        alert(`Chuỗi không chứa dấu cách: `);
    }
}else{
    alert(`đây không phải là một chuỗi!!!`);
}
