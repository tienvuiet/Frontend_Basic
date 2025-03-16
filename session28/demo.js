//1 Tạo object 
const person = {
    personName: "Vũ Việt Tiến",
    age : 30,
    address: "Hà Nội",
    isMarried: false, 
};
//1.1 Truy cập vào Object
console.log("Person Name: ", person.personName);
console.log("Person age: ", person.age); 
const key = "personName";
console.log("PersonName: ",person[key]);
console.log("Person address: ", person["address"]);
//2.Thêm thuộc tính cho object
person.height = 160; //Thêm cho đối tượng person một thuộc tính là height
person.weight = "Thin";
console.log("Person sau khi được thêm thuộc tính: ", person);
//3.Cập nhật giá trị
person.personName = "Trần văn A";
person.age = 25;
console.log("Person sau khi được cập nhật: ", person);
//4.Xóa thuộc tính của objectobject
delete person.isMarried;
delete person.address;
console.log("Person sau khi được xóa: ", person);
//Truy xuất đối tượng với Destructuring assigment
const {personName, address, isMarried } = person;
console.log(personName, address, isMarried );
//Tạo mảng đối tượng 
const teachers = [
    {
        id: 1,
        teacherName: "Ngô Quang Anh",
        age: 20,
    },
    {
        id: 22,
        teacherName: "Ngô Quang ",
        age: 2,
    },
] 
console.table(teachers);
//duyệt qua đối tượng 
for (const key in person) {
    console.log("Key: ", key);
    console.log("value: ", person[key]);
}
//Danh sachs các cái key của object
console.log("Danh sách cảu key của object person: ", Object.keys(person));
console.log("Danh sách cảu key của object person: ", Object.values(person));

///Optional Chaning
// const user = {
//     name : "alice";

// };
    // console.log("City: ", user?.address?.city);


