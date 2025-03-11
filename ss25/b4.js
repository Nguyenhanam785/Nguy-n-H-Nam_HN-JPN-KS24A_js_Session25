function isPrime(n) {
    if (typeof n !== "number" || !Number.isInteger(n) || n < 1)
         return "dữ liệu không hợp lệ";
    if (n < 2)
         return "không phải là số nguyên tố";
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
             return "không phải là số nguyên tố";
    }
    return "là số nguyên tố";
}
console.log(isPrime(17));
console.log(isPrime(6));
console.log(isPrime("text"));