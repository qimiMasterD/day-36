import { useNavigate } from "react-router";

import styles from "./NotFound.module.scss";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles["container"]}>
            <div className={styles["status"]}>404</div>
            <div className={styles["desc"]}>
                <span>
                    The Page You’re Looking for Can’t be Found. It’s Looks Like
                    You’re Trying
                </span>
                <span>
                    to Access a Page That Either Has Been Deleted or Never
                    Existed...
                </span>
            </div>
            <button
                className={styles["btn"]}
                onClick={() => {
                    navigate(-1);
                }}
            >
                <i className="fa-solid fa-arrow-rotate-left"></i>
                <span>Return</span>
            </button>
        </div>
    );
}

export default NotFound;
