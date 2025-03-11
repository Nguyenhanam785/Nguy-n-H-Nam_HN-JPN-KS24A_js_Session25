function filterNumbers(arr) {
    if (!Array.isArray(arr)) 
        return "dữ liệu không hợp lệ";
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newarr.push(arr[i]);
        }
    }
    return newarr.length ? newarr.join(", ") : "mảng không chứa số chẵn";
}
console.log(filterNumbers([11, 4, 65, 6]));
console.log(filterNumbers([1, 3, 5, 17]));
console.log(filterNumbers("text"));