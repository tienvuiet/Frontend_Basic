let nam = +prompt(`Nhập vào số năm kinh nghiệm: `);
if(nam<1){
    alert(`Mới vào nghề`);
}else if(nam>=1 && nam<=3){
    alert(`Nhân viên có kinh nghiệm`);
}else if(nam>=4 && nam<=6){
    alert(`Chuyên viên`);
}else if(nam>6){
    alert(`Quản lý`);
}