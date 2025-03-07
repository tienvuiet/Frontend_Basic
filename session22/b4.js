let input = prompt("Nhập vào dãy số");
let arr = input.split("");
console.log(`Mảng hiện tại: `, arr);
let max = arr[0];
for(let i=0; i< arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(`số ${max} là số lớn nhất trong mảng`)