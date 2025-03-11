function countPosInt(arr) {
    if (!Array.isArray(arr)) return "dữ liệu không hợp lệ";
    let count = arr.filter(num => Number.isInteger(num) && num > 0).length;
    return count ? count : "không có số nguyên dương trong mảng";
}

console.log(countPosInt([4, 5.4, 6, -2]));
console.log(countPosInt([1, 2, 5, 7, -8, 6]));
console.log(countPosInt([1.2, -3, -6]));