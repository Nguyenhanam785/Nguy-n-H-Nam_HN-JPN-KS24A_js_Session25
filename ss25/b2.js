function sumIntegers(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return "dữ liệu không hợp lệ";
    }
    if (a % 1 !== 0 || b % 1 !== 0) {
        return "dữ liệu không hợp lệ";
    }
    let sum = a + b;
    return "tổng là " + sum;
}
console.log(sumIntegers(2, 6));
console.log(sumIntegers(3, "text"));
console.log(sumIntegers(7, -7));
console.log(sumIntegers(4.5, 3));