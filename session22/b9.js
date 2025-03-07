let a = [1, 1, 3, 4, 5, 2, 3, 1, 8, 7];
a.sort();
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] == a[j + 1]) {
            a.splice(j, 1);
        }
    }
}
console.log(a);