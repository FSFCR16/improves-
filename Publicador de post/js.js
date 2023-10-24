const numbers = [4, 2, 5,7];
numbers.sort(function (a, b) {
    console.log(a + " soy a")
    console.log(b + " soy b")
    console.log(a - b +" resultado")
    return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]
