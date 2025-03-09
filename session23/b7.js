let arr = [];
let n = +prompt(`Nhập vào số lượng phần tử mảng: `);
if(n===0){
    alert(`Mảng không có phần tử nào..`);
}else if(n<0){
    alert(`Số lượng phần tử mảng không được nhỏ hơn 0..`);
}else{
    for(let i =0 ; i< n; i++){
        let input = +prompt(`nhập vào gía tri thứ ${i+1}: `);
        arr.push(input);
    }
    let max = arr[0];
    let maxsecond = arr[0];
    for(let i=0; i< n; i++){
        if(arr[i]>max){
            maxsecond=max;
            max=arr[i];
        }
    }
    alert(`Giá trị lớn thứ 2 trong mảng là: ${maxsecond}`);
}