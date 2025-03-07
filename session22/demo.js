let students = ["Anh Quốc","Việt Anh","Hồng Kỳ","VTV"];
console.log(students);
// read one - lấy một phần tử
students[3];// "VTV"
console.log(students[3], "đẹp trai");
students[students.length - 1]; 
// read all - lấy ra toàn bộ phần tử trong mảng
for( let i=0 ; i<students.length; i++){
    console.log(students[i], "Đẹp traiiitraiii") ;
}
for(let student of students){
    console.log(student);
}
// khi muốn làm vc toàn bộ phần tử trong mản theo chiều xuôi
for(let index in students){
    console.log(index, students[index]);
}
// khi muốn làm vc toàn bộ phần tử trong mản theo chiều xuôi, theo chỉ số
//Create- Thêm đầu
//unshif(new);
students.unshift("Quốc Khánh");
console.log(students);
//.push(new)- thêm cuối
students.push("Hưng Gia");
console.log(students);
//.splice(index, 0, "new");- thêm vào bị trí bất kỳ
students.splice(2, 0, "Sơn Thái ");
console.log(students);
//update-Cập nhật
students[6]="Hồng anh";
console.log(students);
//Delete-xóa
//Xóa đầu
//.shift()
students.shift();
console.log(students);
//Xóa cuối
//.pop()
students.pop()
console.log(students);
//Xóa tại vịt trí bất kỳ
// .splice(index, number)
students.splice(3,1);
console.log(students);