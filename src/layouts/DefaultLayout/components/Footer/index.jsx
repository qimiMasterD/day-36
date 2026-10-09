import { Link } from "react-router";

import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>&copy; 2026. F8 Project.</p>
                <ul className={styles.links}>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
