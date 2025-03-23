const weatherData = [
    {
        id: 1,
        name: `Hà Nội`,
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iQi5YT1EBpXQ6XQNDi0ug6eMLEN2UgZbuksZZv7kCWa8i78&s`,
    },
    {
        id: 2,
        name: `Hồ Chí Minh`,
        temperature: 32,
        humidity: 75,
        windSpeed: 5,
        description: "Nắng",
        icon: `https://images.emojiterra.com/microsoft/fluent-emoji/15.1/512px/2600_flat.png`,
    },
    {
        id: 3,
        name: `Đà Nẵng`,
        temperature: 28,
        humidity: 82,
        windSpeed: 5,
        description: "Nắng",
        icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4veoBViTd4OgfW42M0Q_hwOEeADcBL0CDA&s`,
    },
];
const bangHien = document.getElementsByClassName("bangHien")[0];
const timKiem = document.getElementById("search").onclick = function() {
    let text = document.getElementById("nhapText").value;
    if (text.toLowerCase() === "hà nội") {
        bangHien.innerHTML = "";
        const thoiTiet = weatherData.filter(product => product.id === 1);
        thoiTiet.forEach(product => {    
            const cartHTML = `
                <div>${product.name}</div>
                <div id="thongTin">
                    <img src="${product.icon}" alt="">
                    <div id="doC">${product.temperature}°C</div>
                    <div id="thongTin2">   
                        <p>${product.description}</p>
                        <p>Độ ẩm: ${product.humidity}%</p>
                        <p>Tốc độ gió: ${product.windSpeed}km/h</p>
                    </div>
                </div>
            `;
            bangHien.innerHTML = cartHTML; 
        });
    }else if(text.toLowerCase() === "hồ chí minh"){
        bangHien.innerHTML = "";
        const thoiTiet = weatherData.filter(product => product.id === 2);
        thoiTiet.forEach(product => {    
            const cartHTML = `
                <div>${product.name}</div>
                <div id="thongTin">
                    <img src="${product.icon}" alt="">
                    <div id="doC">${product.temperature}°C</div>
                    <div id="thongTin2">   
                        <p>${product.description}</p>
                        <p>Độ ẩm: ${product.humidity}%</p>
                        <p>Tốc độ gió: ${product.windSpeed}km/h</p>
                    </div>
                </div>
            `;
            bangHien.innerHTML = cartHTML; 
        });
    }else if(text.toLowerCase() === "đà nẵng"){
        bangHien.innerHTML = "";
        const thoiTiet = weatherData.filter(product => product.id === 3);
        thoiTiet.forEach(product => {    
            const cartHTML = `
                <div>${product.name}</div>
                <div id="thongTin">
                    <img src="${product.icon}" alt="">
                    <div id="doC">${product.temperature}°C</div>
                    <div id="thongTin2">   
                        <p>${product.description}</p>
                        <p>Độ ẩm: ${product.humidity}%</p>
                        <p>Tốc độ gió: ${product.windSpeed}km/h</p>
                    </div>
                </div>
            `;
            bangHien.innerHTML = cartHTML; 
        });
    }
};