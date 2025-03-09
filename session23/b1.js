let count = 0;
let arr=[];
for(let i = 0; i<10; i++){
    let input = +prompt(`Nhập vào giá trị ${i}=`);
    arr.push(input);
}
console.log(`mảng hiện tại là: `, arr);
for(let j=0; j<arr.length; j++){
    if(arr[j]>=10){
        console.log(arr[j]);
    }else{
        count++;
    }
}
if(count===0){
    console.log(`Không có số nào lớn hơn 10`);
}