// let number = prompt(`Nhập vào dãy số bất kì cách nhau bởi dấu " "`);
// let arr = number.split(" ");

// console.log(`Mảng hiện tại`, arr);
// let tongchan=0;
// let tongle=0;
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%2===0){
//         tongchan+=arr[i];
//     }else{
//         tongle+=arr[i];
//     }
// }
// console.log(`tổng của các số chẵn là: ${tongchan}`);
// console.log(`tổng của các số lẻ là: ${tongle}`);
let number = +prompt(`Nhập vào số phần tử muốn nhập vào mảng`);
if(isNaN(number)){
    alert(`Nhập sai vui lòng nhập lại`);
}else{
    let a = [];
    let tongchan=0;
    let tongle=0;
    for(let i = 0; i< number; i++){
    let giatri = +prompt(`Nhập vào giá trị thứ ${i+1}:`);
    a.push(giatri);
    }
    console.log(`mảng vừa nhập là:`, a);
    for(let j =0 ; j<number;j++){
        if(a[j]%2===0){
            tongchan+=a[j];
        }else{
            tongle+=a[j];
        }
    }
    console.log(`tổng các số chẵn vừa nhập là: ${tongchan}`);
    console.log(`Tổng các số lẻ vừa nhập là: ${tongle}`);
}
