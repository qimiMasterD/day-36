import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "./components/Footer";

import styles from "./DefaultLayout.module.scss";

/*
Áp dụng cho các pages: Home (/), About (/about), Posts (/posts), PostDetail (/posts/:id), Contact (/contact), Privacy (/privacy)
*/

function DefaultLayout() {
    return (
        <div className={styles["layout"]}>
            <Header></Header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
