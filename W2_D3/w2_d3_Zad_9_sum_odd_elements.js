var a = [3, 4, 5, 2, 7, 9, 34];
var sum = 0;


while (i < a.length) {
    if (a[i] % 2 == 1) {
        sum = sum + a[i];
        i++;
    }
}

console.log(sum);
