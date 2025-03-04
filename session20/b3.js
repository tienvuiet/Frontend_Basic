let number = +prompt(`Nhập vào số muốn tính toán: `);

if(isNaN(number)){
    alert(`Số không hợp lệ!!`)
}else{
    let temp; let sum = 0;let r;
    for(temp=number;number!=0;number = Math.floor(number / 10)){
        r=number%10;
        sum=sum*10+r;
   }
   if(temp===sum){
    alert(`là số đối xứng`);
   }else{
    alert(`không là số đối xứng`);
   }
}

