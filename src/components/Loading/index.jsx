import styles from "./Loading.module.scss";

function Loading({ children }) {
    return <div className={styles.loading}>{children}</div>;
}

export default Loading;
