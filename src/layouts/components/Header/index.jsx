import { NavLink } from "react-router";

import styles from "./Header.module.scss";

const mainNavItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/about",
        title: "About",
    },
    {
        to: "/posts",
        title: "Posts",
    },
    {
        to: "/contact",
        title: "Contact",
    },
    {
        to: "/privacy",
        title: "Privacy",
    },
    {
        to: "/admin",
        title: "Admin",
    },
];

const sideNavItems = [
    {
        to: "/login",
        title: "Login",
    },
    {
        to: "/register",
        title: "Register",
    },
];

function Header() {
    return (
        <nav className={styles["nav-container"]}>
            <ul className={styles["main-nav"]}>
                {mainNavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                                to={item.to}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <ul className={styles["side-nav"]}>
                {sideNavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                                to={item.to}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Header;
