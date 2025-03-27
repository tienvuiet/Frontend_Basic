const carts = JSON.parse(localStorage.getItem("carts")) || [
    {
        id: 1,
        nameCart: "GOOGLE - SEARCH ENGINE",
        url: "https://www.google.com/",
        icon: "https://www.google.com/s2/favicons?domain=www.google.com",
    },
    {
        id: 2,
        nameCart: "YOUTUBE - VIDEO SHARING",
        url: "https://www.youtube.com/",
        icon: "https://www.google.com/s2/favicons?domain=www.youtube.com",
    },
];
const addBook = document.getElementById("addBook");
const tieuDe = document.getElementById("tieuDe");
const closeIcon = document.querySelector("#tieuDe2 i");
tieuDe.addEventListener("click", function () {
    addBook.style.display = "flex";
});
closeIcon.addEventListener("click", function () {
    addBook.style.display = "none";
});
const themCart = document.getElementById("tongWed");
function hienThiWebs() {
    themCart.innerHTML = "";
    carts.forEach((cart, index) => {
        let the = `
        <div id="trangWed">
                <img src="${cart.icon}"
                    alt="">
                <a href="${cart.url}">${cart.nameCart}</a>
                <i class="fa-regular fa-circle-xmark" onclick="xoaCart(${index})"></i>
            </div>
        ` ;
        themCart.innerHTML += the;
    })
}
function xoaCart(index){
    carts.splice(index,1);
    localStorage.setItem("carts",JSON.stringify(carts));
    hienThiWebs();
}

document.getElementById("submit").onclick = function(){
    const wedName = document.getElementById("name").value;
    if(wedName.trim()===""){
        alert(`Vui lòng nhập tên wed`);
        return;
    }
    const wedUrl = document.getElementById("url").value;
    if(wedUrl.trim()===""){
        alert(`Vui lòng nhập url`);
        return;
    }
    carts.push( 
        {
            id: carts.length+1,
            nameCart: wedName,
            url: wedUrl,
            icon: `https://www.google.com/s2/favicons?domain=${wedUrl}`
        }
    );
    localStorage.setItem("carts",JSON.stringify(carts));
    hienThiWebs();
    document.getElementById("name").value="";
    document.getElementById("url").value="";
}
hienThiWebs();