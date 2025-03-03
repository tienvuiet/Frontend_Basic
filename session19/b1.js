let month = +prompt(`Nhập vào số tháng muốn kiểm tra: `);
if(month>0&&month<=12){
    if(month===2){
    alert(`Tháng ${month} có 28 hoặc 29 ngày`);
    }
    switch(month){
        case 1: case 5: case 7: case 8: case 10: case 12:
            alert(`tháng ${month} có 31 ngày`);
            break;
        case 4: case 6: case 9: case 11:
            alert(`tháng ${month} có 30 ngày`);
            break;
    }
}else{
    alert(`Tháng không hợp lệ:`);
}