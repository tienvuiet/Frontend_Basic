let le = 0;
let chan = 0;
for(let i =1 ; i<=5; i++){
    let num = +prompt(`Nhập vào số thứ ${i}:`);
    if(Number.isInteger(num)){
    if(num%2===0){
        chan++;
    }else{
        le++;
    }
    }else{
        alert(`Số nhập vào không hợp lệ!`)
    }
}
alert(`các số lẻ vừa nhập là: ${le}`);
alert(`các số chẵn vừa nhập là: ${chan}`);