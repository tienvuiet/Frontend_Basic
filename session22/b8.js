let a = [6, 1, 7, 3, 1, 2, 6, 1, 1, 7];
let bien = a[0];
let max = 0;
for (let i = 0; i < a.length; i++) {
    let b = 0;
    for (let j = 0; j < a.length; j++) {
        if (a[i] === a[j]) {
            b++;
        }
    }
    if (b > max || (b === max && a[i] < bien)) {
        max = b;
        bien = a[i];
    }
}
console.log(`${bien}`);