// //Session storage    
// console.log(sessionStorage);
// //GET-Lấy dữ liệu nằm trong session storage
// console.log(sessionStorage.email);
// sessionStorage.password;

// //.getItem();
// let email = sessionStorage.getItem("email");
// console.log(email);
// //create - thêm mới dữ liệu vào bên trong session storage
// sessionStorage.username = "mck112"
// //.setItem();
// sessionStorage.setItem("dob","21/1/2015")
// //UPDATE-cập nhật dữ liệu trong session storage
// sessionStorage.dob = "40/1/1995"
// //DELETE-xóa dữ liệu nằm trogn sessionStorage
// delete sessionStorage.dob;
// sessionStorage.removeItem("username")

// console.log(sessionStorage.name = "hello world");
// console.log(sessionStorage.age=18);


// //JSON- javaScript Object Notation
// sessionStorage.dob = "31/01/1993";
// let students = [
//     {
//         id: 1,
//         name: "trần văn A",
//     },
//     {
//         id: 2,
//         name: "trần văn B",
//     },

// ]
// sessionStorage.studentList=JSON.stringify(students);
// console.log(JSON.parse( sessionStorage.studentList));

//localStorage
localStorage.age=JSON.stringify(18);
localStorage.studentList = JSON.stringify([{id:1, name: "hello"}]);
console.log(JSON.parse(localStorage.studentList));
