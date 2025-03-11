let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart = [];

function showProducts() {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`${product[0]} - Số lượng: ${product[1]} - Giá: ${product[2]}đ`);
    });
}

function addToCart(productName) {
    let productIndex = products.findIndex(item => item[0] === productName);
    
    if (productIndex === -1) {
        console.log("Sản phẩm không có trong cửa hàng!");
        return;
    }
    
    if (products[productIndex][1] === 0) {
        console.log("Sản phẩm đã hết hàng!");
        return;
    }
    
    products[productIndex][1]--;
    
    let cartIndex = cart.findIndex(item => item[0] === productName);
    if (cartIndex === -1) {
        cart.push([productName, 1, products[productIndex][2]]);
    } else {
        cart[cartIndex][1]++;
    }
    console.log("Đã thêm vào giỏ hàng!");
}

function showBill() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống!");
        return;
    }
    
    console.log("Hóa đơn:");
    let total = 0;
    cart.forEach(item => {
        let subtotal = item[1] * item[2];
        console.log(`${item[0]} - Số lượng: ${item[1]} - Giá: ${subtotal}đ`);
        total += subtotal;
    });
    console.log(`Tổng tiền: ${total}đ`);
}

function main() {
    while (true) {
        let choice = prompt("1. Xem sản phẩm\n2. Mua hàng\n3. Xem hóa đơn\n4. Thoát\nChọn: ");
        
        if (choice === "1") {
            showProducts();
        } else if (choice === "2") {
            let productName = prompt("Nhập tên sản phẩm: ");
            addToCart(productName);
        } else if (choice === "3") {
            showBill();
        } else if (choice === "4") {
            console.log("Tạm biệt!");
            break;
        } else {
            console.log("Lựa chọn không hợp lệ!");
        }
    }
}

main();