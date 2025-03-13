let arr= [];
let mangRong = [];
let n = +prompt(`Nhập vào số lượng phần tử mảng: `);
for(let i =0; i<n; i++){
    let input = +prompt(`Nhập vào giá trị thứ ${i+1}:`);
    arr.push(input);
}
let giatri = +prompt(`Nhập vào độ dài mảng con: `);

check(arr, giatri);
console.log(`Mảng sau khi tách là: `, mangRong);
function check(arr, n){

    for(let i =0; i<arr.length; i+n){
        let sup = arr.splice(i,i+n);
        mangRong.push(sup);
    }
}