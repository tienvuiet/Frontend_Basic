let pass = prompt(`Nhập mật khẩu`)
alert(`Kết quả của quá trình kiểm tra là: ${check(pass)}`);
function check(passWord){
    let chuHoa = 0;
    let chuThuong = 0;
    let so = 0;
    let arr=passWord.split("")
    for(let i=0; i<arr.length; i++){
        if(arr[i]<="Z"&&arr[i]>="A"){
            chuHoa++;
        }
        if(arr[i]<="z"&&arr[i]>="a"){
            chuThuong++;
        }
        if(arr[i]<="9"&&arr[i]>="0"){
            so++;
        }
    }
    if(so===0||chuHoa===0||chuThuong===0){
        return false
    }else{
        return true
    }
}
