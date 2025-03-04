let a = +prompt(`nhập vào số a: `);
let b = +prompt(`nhập vào số b là bậc của a: `);
if(isNaN(a)||isNaN(b)){
    alert(`Không hợp lệ`);
}else{
    let tong = a;
    for(let i = 0; i< b;i++){
    tong+=a*i; 
    }
    alert(`${tong}`);
}