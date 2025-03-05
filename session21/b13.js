document.write(`Hình 1: <br>`)
for (let i = 10; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write(`Hình 2: <br>`)
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write(`Hình 3: <br>`)
for (let i = 1; i <= 10; i++) {
    for (let k = 10; k > i; k--) {
        document.write("&nbsp;&nbsp;");
    }
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write(`Hình 4: <br>`);
for (let i = 10; i >= 1; i--) {
    for (let k = 10; k > i; k--) {
        document.write("&nbsp;&nbsp;"); 
    }
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}