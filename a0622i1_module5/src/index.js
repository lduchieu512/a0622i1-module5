function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        var num = fib[i - 1] + fib[i - 2];
        fib.push(num);
    }
    return fib;
}
function sum(arr) {
    return arr.reduce(function (prev, curr) { return prev + curr; }, 0);
}
var result = fibonacci(10);
console.log("Fibonacci sequence: ".concat(result)); // Fibonacci sequence: 0,1,1,2,3,5,8,13,21,34
console.log("Sum: ".concat(sum(result))); // Sum: 88
