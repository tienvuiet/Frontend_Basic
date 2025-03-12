let arr = [1,20,50,4,5,6,7,8,9,10];
if(arr.length===0){
    console.log(`Mang khong co phan tu nao`);
}else{
    let check = arr.filter(function(element,index) {    
        return element>=10;
    })
    console.log(check)
}
