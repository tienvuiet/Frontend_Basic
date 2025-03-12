// // function myFunction(random){
// //    random();
// // }
// // myFunction(function() {});

// let numbers = [10, 20, 30, 40, 50, 60, 70];
// // forEach
// numbers.forEach(function (element, index) {
//     console.log(index, element);
// });

// //map-ánh xạ
// let result = numbers.map(function (element, index) {
//     return `Con số: ${element}`;
// });
// console.log(result);

// // filter - lọc
// let filterResult = numbers.filter(function (element, index) {
//     return element > 20 && element < 60;
// });
// console.log(filterResult);

// //reduce-giảm
// // acc-accumulater-biến tích lũy
// // cur-current value- giá trị hiện tại
// let reduceResult = numbers.reduce(function (acc, cur) {    
//     console.log("acc",acc);
//     console.log("cur",cur);
//     return acc+cur;
// }, 0);
// console.log("Reduce result ", reduceResult)

// // some
// let arr = [13,3,5,9,9,7,1];
// let istrue =arr.some(function(element, index) { 
//     return element % 2==0;
// })
// console.log(istrue);

// every
// let arr = [13,2,5,9,9,7,1];
// let istrue =arr.every(function(element, index) { 
//     return element % 2!==0;
// })
// console.log(istrue);
