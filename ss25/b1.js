function findMin(arr) {
    if (typeof arr === "string") {
        return "giá trị không hợp lệ";
    }
    if (arr.length === 0) {
        return "mảng không chứa phần tử";
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return "phần tử nhỏ nhất trong mảng là " + min;
}
console.log(findMin([2, 4, 8, 1, 9]));  
console.log(findMin([]));          
console.log(findMin("abc"));
console.log(findMin([5, 2, 7, 5, 4]));