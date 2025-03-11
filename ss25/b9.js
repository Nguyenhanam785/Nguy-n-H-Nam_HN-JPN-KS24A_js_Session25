let users = [];

function isValidEmail(email) {
    if (email.indexOf('@') === -1) return false;
    
    let domain = email.split('@')[1];
    if (!domain) return false;
    
    return domain.endsWith('.com') || domain.endsWith('.vn');
}

function registerEmail(email) {
    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ!");
        return;
    }
    
    if (users.indexOf(email) !== -1) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
    
    console.log("Danh sách users hiện tại:", users);
}
registerEmail("test@gmail.com");
registerEmail("test@gmail.vn");
registerEmail("test@gmail.com");
registerEmail("test@gmail");
registerEmail("test@@mail.com");