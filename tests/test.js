function somofalldigits(n) {
    var x = 0;
    var num = 0;
    for (var i = 0; n >= 0.99; i++) {
        x = n % 10;
        num += x;
        n = n / 10;
        n = n - x / 10;
    }
    if (num >= 10) {
        return somofalldigits(num);
    }
    else {
        return num;
    }
}
var get = somofalldigits(195);
console.log(get);
