let number = [1,12,32,2,3,4,2]
let bien = +prompt(`Nhập vào gía trị muốn đoán`);
let co = false
for(let i =0 ; i< number.length;i++){
    if(number[i]===bien){
    co=true;
    }
}
if(co===true){
    console.log(`Bingo`);
}else{
    console.log(`Chúc nạn may mắn lần sau`);
}