function doixung(str) {
    let reversed = str.split("").reverse().join("");
    let result = str === reversed ? "Chuỗi là chuỗi đối xứng" : "Chuỗi không phải là chuỗi đối xứng";
    alert(result);
    return result;
}

let str = prompt("Nhập vào chuỗi ký tự:");
doixung(str);