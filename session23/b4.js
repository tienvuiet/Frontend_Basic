let n = +prompt(`Nhập vào số lượng phần tử mảng: `);
let arr = [];
if(n===0){
    alert(`Không có ký tự số!!!!`);
}else{
    for(let i =0; i<n; i++){
        let input = prompt(`Nhập vào gía trị ${i}`);
        arr.push(input);
    }
    for( let i =0; i<n; i++){
        if(!isNaN(parseInt(arr[i]))===true){
            console.log(arr[i]);
        }
    }
}