let number = +prompt(`Nhap so muon tinh tong: `);
if(number <=0 || isNaN(number)){
    alert(`Du lieu nhap vao khong hop le`);
}else{
    let tong = 0;
    for(let i = 1; i<= number; i++){
        tong = tong + i; 
    }
    alert(`ket qua la: ${tong}`);
}
