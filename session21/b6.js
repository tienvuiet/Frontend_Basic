let num = +prompt(`Nhập vào số nguyên bất kì: `);
if(Number.isInteger(num)){
    if(num>0){
        for(let i=1;i<=num;i++){
            if(num%i===0){
                console.log(i);
            }
        }
    }else if(num<0){
        for(let i=-1;i>=num;i--){
            if(num%i===0){
                console.log(i);
            }
        }
    }
    
}
else{
    alert(`Giá trị nhập vào không hợp lệ: `);
}

