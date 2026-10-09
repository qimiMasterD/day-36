import { HashRouter as Router, Routes, Route } from "react-router";

import ScrollToTop from "../ScrollToTop";

// Layouts
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

// Pages
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import Dashboard from "../../pages/Dashboard";
import Users from "../../pages/Users";
import Settings from "../../pages/Settings";
import NotFound from "../../pages/NotFound";

/*
Auth Layout
Có AuthSidebar riêng hiển thị bên trái với các link: “Đăng nhập”, “Đăng ký”, “Quên mật khẩu”
Áp dụng cho các pages: Login (/login), Register (/register)
*/

/*
Default Layout
Áp dụng cho các pages: Home (/), About (/about), Posts (/posts), PostDetail (/posts/:id), Contact (/contact), Privacy (/privacy)
*/

/*
Admin Layout
Áp dụng cho các pages: Dashboard (/admin), Users (/admin/users), Settings (/admin/settings)
*/

function AppRoutes() {
    return (
        <Router>
            <ScrollToTop></ScrollToTop>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
