// //document.getElementById
// let div = document.getElementById("demo-id");
// console.log(div);
// //document.getElementsByClassName;
// let elementList = document.getElementsByClassName("demo-class");//
// console.log(elementList)
// let div1 = elementList[0];
// console.log(div1);
// for(let i=0; i<=elementList.length; i++){
//     console.log(elementList[i]);
// }
// let divs = document.getElementsByTagName("div");
// console.log(divs);
// let div = document.querySelector("div#demo-id.demo-class");
// console.log(div);
// let elements = document.querySelectorAll("div.demo-class");
// console.log(elements);


// //innertext, innnerText, TextContent
// let p = document.getElementById("paragraph")
// console.log(p.innerHTML);
// console.log(p.innerText);
// console.log(p.textContent);
// p.textContent = "hello world"
// p.innerText = "Nội dung đã được cập nhật"
// p.innerHTML = "<b><i>Hellowworld</i></b>"


// let img = document.getElementsByTagName("img")[0]
// console.log(img);
// let link = img.getAttribute("src");
// console.log(link);
// let a = document.getElementById("ancher")
// console.log(a);
// let url = a.getAttribute("href")
// console.log(url);
// a.setAttribute("href", "http://rikkei.edu.vn")


// let div = document.getElementById("demo-styte-property")
// console.log(div.style);
// console.log(div.style.backgroundColor);
// // div.style.backgroundColor = "red"
 
// console.log(div.classList);
// div.classList.add("c4");
// div.classList.remove("c2");

// let check = div.classList.contains("c2");//false
 
// console.log(check);

// div.classList.toggle("demo-toggle");
// // có class thì xóa đi còn chưa thì thêm vào
// div.classList.add("demo-class-list")


// let ul = document.getElementById("unordered-list")
// let lastLi = ul.children[2]
// console.log(lastLi.parentElement);


// let li = document.createElement("li")
// li.innerHTML = "Hello world"
// console.log(li);
// let ul = document.getElementById("unordered-list");
// ul.appendChild(li);

// li.remove();



// function handleClick(){
//     console.log("Hello world");
//     console.log("CLick đã thành công...");
// }
// let btn = document.getElementById("btn2");
// console.log(btn);
// btn.onclick = function(){
//     alert(`Hello world`)
// }
// let btn2 = document.getElementById("btn3");
// console.log(btn2);
// btn2.addEventListener("click", function(){  
//     alert(`Sự kiện onclick trên btn2 vừa được thực thi`)
// })

// let btn = document.getElementById("btn4");
// btn.addEventListener("dblclick", function(){    
//     console.log("sự kiện vừa được thực thi")
// })


let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", function(even){   
    even.preventDefault();
    console.log("vừa submit form này xong")
    let emailvalue = form.email.value//input đầu tiên
    let passwordValue = form.password.value//input thứ 2
    console.log(emailvalue);
    console.log(passwordValue);
    if(emailvalue===""||passwordValue===""){
        alert(`dữ liệu nhập vào input không hợp lệ!!`)
    }else{
        form.submit();
    }

})
