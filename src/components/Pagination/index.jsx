import styles from "./Pagination.module.scss";

function Pagination({ totalPage, onChangePage, currentPage }) {
    const onFirst = currentPage === 1;
    const onLast = currentPage === totalPage;

    return (
        <ul className={styles.pagination}>
            <li>
                <button
                    className={`${styles["nav-btn"]} ${styles["button"]} ${onFirst ? styles["disable"] : ""}`}
                    onClick={() => {
                        if (currentPage <= 1) return;
                        onChangePage(1);
                    }}
                >
                    <i className="fa-solid fa-angles-left"></i>
                </button>
            </li>
            <li>
                <button
                    className={`${styles["nav-btn"]} ${styles["button"]} ${onFirst ? styles["disable"] : ""}`}
                    onClick={() => {
                        if (currentPage <= 1) return;
                        onChangePage(currentPage - 1);
                    }}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>
            </li>
            {Array(+totalPage)
                .fill()
                .map((_, index) => {
                    return (
                        <li key={index} className={styles.item}>
                            <button
                                onClick={() => {
                                    if (index + 1 === currentPage) return;
                                    onChangePage(index + 1);
                                }}
                                className={`${styles.button} ${currentPage === index + 1 ? styles.active : ""}`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    );
                })}
            <li>
                <button
                    className={`${styles["nav-btn"]} ${styles["button"]} ${onLast ? styles["disable"] : ""}`}
                    onClick={() => {
                        if (currentPage >= totalPage) return;
                        onChangePage(currentPage + 1);
                    }}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </li>{" "}
            <li>
                <button
                    className={`${styles["nav-btn"]} ${styles["button"]} ${onLast ? styles["disable"] : ""}`}
                    onClick={() => {
                        if (currentPage >= totalPage) return;
                        onChangePage(totalPage);
                    }}
                >
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </li>
        </ul>
    );
}

export default Pagination;
