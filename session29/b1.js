let choice = 0;
let objects = [];
while (true) {
    choice = +prompt(`
        1.Thêm đối tượng Contact vào danh sách liên hệ.
        2.Hiển thị danh sách danh bạ.
        3.Tìm kiếm thông tin Contact theo số điện thoại.
        4.Cập nhật thông tin Contact(name, email, phone) theo id.
        5.Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
        6.Thoát.`);
    switch (choice) {
        case 1:
            case1();
            break;
        case 2:
            case2();
            break;
        case 3:
            case3();
            break;
        case 4:
            case4();
            break;   
        case 5:
            case5();
            break;     
        case 6:
            alert(`Đã thoát chương trình`);
            break;
        default:
            alert(`Lựa chọn không hợp lệ!!`);
            break;    
    }
    if(choice===6){
        break;
    }
}
function case1(){
    const nameObject = prompt(`Nhập vào tên đối tượng:`);
    const emailObject = prompt(`Nhập vào email đối tượng:`);
    const phoneObject = prompt(`Nhập vào số điện thoại liên hệ:`);
    const objectNew = {
        id: Math.ceil(Math.random()*1000),
        name: nameObject,
        email: emailObject,
        phone: phoneObject,
    };
    objects.push(objectNew);
    alert(`Thêm đối tượng thành công!`);
}
function case2(){
    console.table(objects);
}
function case3(){
    const phoneSearch = prompt(`Nhập số điện thoại cần tìm:`);
    const result = objects.filter((object)=>String(object.phone)===phoneSearch);
    if(result.length>0){
        console.log(`thông tin object có số điện thoại ${phoneSearch} là:`)
        console.table(result);
    }else{
        alert(`Không tìm thấy contact object có số điện thoại như vậy!!`);
    }
}
function case4(){
    const idUpdate = +prompt(`Nhập vào idOject cần cập nhật:`);
    const findObjectUpdate = objects.find((object)=>object.id === idUpdate);
    if(findObjectUpdate){
        const nameUpdate = prompt(`tên contact ban đầu của bạn là ${findObjectUpdate.name}. Nhập tên muốn update:  `);
        findObjectUpdate.name = nameUpdate;
        const emailUpdate = prompt(`email contact ban đầu của bạn là ${findObjectUpdate.email}. Nhập email muốn update:  `);
        findObjectUpdate.email = emailUpdate;
        const phoneUpdate = prompt(`phone contact ban đầu của bạn là ${findObjectUpdate.phone}. Nhập phone muốn update:  `);
        findObjectUpdate.phone = phoneUpdate;
        alert(`Cập nhật thành công!!`);
    }else{
        alert(`Không tìm thấy liên hệ có id ${idUpdate}!`);
    }
}
function case5(){
    const idDelete = +prompt(`Nhập vào idContract muốn xóa:`);
    const findIndexObjectDelete = objects.findIndex((object)=>object.id===idDelete);
    if(findIndexObjectDelete!==-1){
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa contact có id là ${objects[findIndexObjectDelete].id} không`);
        if(confirmDelete){
            objects.splice(findIndexObjectDelete, 1);
            alert(`Xóa contact thành công!!`);
        }else{
            alert(`Bạn đã hủy xóa!!`);
        }
    }else{
        alert(`Không tìm thấy contact có id ${idDelete}.`);
    }
}