import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import Loading from "../../components/Loading";
import styles from "./PostDetail.module.scss";

function PostDetail() {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState({ post: null, comments: [] });
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const handleNotFound = () => {
            navigate("/posts", { replace: true });
        };

        if (!id) handleNotFound();
        const getData = async () => {
            Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
                fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
                ),
            ])
                .then(async (response) => {
                    let newData = {};
                    for (let i in response) {
                        i = +i;
                        const rep = response[i];
                        if (!rep.ok) throw new Error();
                        if (i === 0) newData.post = await rep.json();
                        else newData.comments = await rep.json();
                    }
                    setData(newData);
                    setLoading(false);
                })
                .catch(() => {
                    handleNotFound();
                    return;
                });
        };
        getData();
    }, [id]);

    if (isLoading) return <Loading>Fetching this post...</Loading>;

    const { post, comments } = data;
    return (
        <div className={styles.wrapper}>
            <article className={styles.postContainer}>
                <header className={styles.header}>
                    <span className={styles.userID}>
                        Author ID: {post.userId}
                    </span>
                    <h1 className={styles.title}>{post.title}</h1>
                </header>
                <div className={styles.content}>{post.body}</div>
            </article>

            <section className={styles.commentsSection}>
                <div className={styles.commentsTitle}>
                    Comments ({comments.length})
                </div>
                {comments.map((comment) => (
                    <div className={styles.comment} key={comment.id}>
                        <div className={styles.commentHeader}>
                            <div className={styles.name}>{comment.name}</div>
                            <div className={styles.email}>{comment.email}</div>
                        </div>
                        <div className={styles.content}>{comment.body}</div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default PostDetail;
