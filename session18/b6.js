let year = +prompt(`Nhập vào năm muốn kiếm tra: `);
if(year%4===0 && year%100!==0){
    alert(`Đây là năm nhuận`);
}else if(year%400===0 && year %100===0){
    alert(`Đây là năm nhuận`);
}else{
    alert(`Đây không phải là năm nhuận`);
}
