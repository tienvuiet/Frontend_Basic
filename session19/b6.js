let a = +prompt(`Nhập vào số thứ nhất: `);
let b = +prompt(`Nhập vào số thứ hai: `);
let c = +prompt(`Nhập vào số thứ ba: `);
let delta = b*b-4*a*c;
if(delta<0){
    alert(`Phương trình vô nghiệm....`);
}else if(delta===0){
    let nghiemKep = -b/(2*a);
    alert(`Phương trình có nghiệm kép x1=x2=${nghiemKep}`);
}else if(delta>0){
    let x1 = (-b+ Math.sqrt(delta))/2*a;
    let x2 = (-b- Math.sqrt(delta))/2*a;
    alert(`nghiệm thứ nhất là x1=${x1}; x2=${x2}`);
}
