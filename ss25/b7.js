function titleCase(str) {
    if (typeof str !== "string") return "dữ liệu không hợp lệ";
    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(titleCase("hello WORLD"));    
console.log(titleCase("rIKKei acaDEMy")); 