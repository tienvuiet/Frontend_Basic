let arr = [`superman`,`batman`,`tien`,`deptrai`];
if(arr.length===0){
    console.log(`Mang khong co phan tu nao`);
}else{
    let check = arr.filter(function(element,index) {    
        return element.length>5;
    })
    console.log(check)
}
