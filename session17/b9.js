let a = +prompt("nhập vào giá trị a: ")
let b = +prompt("nhập vào giá trị b: ")
let c = +prompt("nhập vào giá trị c: ")
let delta = b*b-4*a*c
let x1= (-b + Math.sqrt(delta))/(2*a)
let x2= (-b - Math.sqrt(delta))/(2*a)
alert(x1)
alert(x2)