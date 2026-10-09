import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

import styles from "./Posts.module.scss";

function Posts() {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const currentPage = +searchParams.get("page") || 1;
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${currentPage}`,
            );
            if (!response.ok) throw new Error("HTTP error: ", response.status);
            const curPosts = await response.json();
            setPosts(curPosts);
        };
        getData();
    }, [currentPage]);

    const handleSearchParam = (page) => {
        setSearchParams({ page: page });
    };

    return (
        <>
            <div className={styles.title}>All posts</div>
            {posts.length === 0 ? (
                <Loading>Fetching posts...</Loading>
            ) : (
                <>
                    <div className={styles["posts-container"]}>
                        {posts.map((post) => {
                            return (
                                <div
                                    key={post.id}
                                    className={styles["post-card"]}
                                >
                                    <div className={styles["post-title"]}>
                                        {" "}
                                        {post.title}
                                    </div>
                                    <div className={styles.content}>
                                        {post.body.length < 100
                                            ? post.body
                                            : `${post.body.slice(0, 100)}...`}
                                    </div>
                                    <button
                                        className={styles["btn-more"]}
                                        onClick={() => {
                                            navigate(`/posts/${post.id}`);
                                        }}
                                    >
                                        Read more
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPage={5}
                        onChangePage={handleSearchParam}
                    />
                </>
            )}
        </>
    );
}

export default Posts;
