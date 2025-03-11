let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];
let cart = [];
function showProducts() {
    console.log("Danh sách sản phẩm trong cửa hàng:");
    products.forEach(product => {
        console.log(`${product[0]} - Số lượng: ${product[1]} - Giá: ${product[2]} VND`);
    });
}
function addToCart(productName) {
    let product = products.find(p => p[0] === productName);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng!");
        return;
    }
    if (product[1] === 0) {
        console.log(`Sản phẩm "${productName}" đã hết hàng!`);
        return;
    }
    product[1]--; 
    let cartItem = cart.find(item => item[0] === productName);
    if (cartItem) {
        cartItem[1]++;
    } else {
        cart.push([productName, 1, product[2]]);
    }
    console.log(`Đã thêm "${productName}" vào giỏ hàng.`);
}
function showCart() {
    console.log("\nGiỏ hàng của bạn:");
    cart.forEach(item => {
        console.log(`${item[0]} - Số lượng: ${item[1]} - Giá: ${item[2]} VND`);
    });
}
function checkout() {
    let total = cart.reduce((sum, item) => sum + item[1] * item[2], 0);
    
    console.log("\nHóa đơn thanh toán:");
    showCart();
    console.log(`Tổng tiền: ${total} VND`);
}
showProducts();
addToCart("mèn mén");
addToCart("bánh bao");
addToCart("bánh bao");
showCart();
checkout();