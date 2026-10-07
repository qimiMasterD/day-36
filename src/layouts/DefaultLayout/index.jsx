import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "./components/Footer";

/*
Áp dụng cho các pages: Home (/), About (/about), Posts (/posts), PostDetail (/posts/:id), Contact (/contact), Privacy (/privacy)
*/

function DefaultLayout() {
    return (
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    );
}

export default DefaultLayout;
