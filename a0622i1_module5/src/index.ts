
function fibonacci(n: number): number[] {
    const fib: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
        const num = fib[i - 1] + fib[i - 2];
        fib.push(num);
    }

    return fib;
}
function sum(arr: number[]): number {
    return arr.reduce((prev, curr) => prev + curr, 0);
}

const result = fibonacci(10);
console.log(`Fibonacci sequence: ${result}`);
console.log(`Sum: ${sum(result)}`);