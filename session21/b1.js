let tong =0;
let a = +prompt(`Nhập vào số t1: `);
let b = +prompt(`Nhập vào số t2: `);
let c = +prompt(`nhập vào số t3: `);
let d = +prompt(`nhập vào số t4: `);
let e = +prompt(`nhập vào số t5: `);
if(Number.isInteger(a)||Number.isInteger(b)||Number.isInteger(c)||Number.isInteger(d)||Number.isInteger(e)){
    if(a%2!==0)tong+=a;
    if(b%2!==0)tong+=b;
    if(c%2!==0)tong+=c;
    if(d%2!==0)tong+=d;
    if(e%2!==0)tong+=e;
    alert(`Kết quả là ${tong}`);
}else{
    alert(`số nhập không hợp lêk!!`);
}
