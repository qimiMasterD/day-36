import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";

/*
Có AuthSidebar riêng hiển thị bên trái với các link: “Đăng nhập”, “Đăng ký”, “Quên mật khẩu”
Áp dụng cho các pages: Login (/login), Register (/register)
*/

function AuthLayout() {
    return (
        <>
            <Header></Header>
            <AuthSidebar></AuthSidebar>
        </>
    );
}

export default AuthLayout;
