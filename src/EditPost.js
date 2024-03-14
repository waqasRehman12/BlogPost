import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "./api/Posts";
import { format } from "date-fns";
import DataContext from "./Context/DataContext";
const EditPost = () => {
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { posts, setPosts } = useContext(DataContext);
    const history = useNavigate();
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    const handleEdit = async (id) => {
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(posts.map((post) => (post.id === id ? { ...response.data } : post)));
            setEditTitle("");
            setEditBody("");
            history.push("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    return (
        <main className="editPostPage">
            {editTitle && (
                <article className="postDetailPage">
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            className="postTitleTextfield"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            className="postBodyTextfield"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="editButton"
                            onClick={() => handleEdit(post.id)}
                        >
                            Submit
                        </button>
                    </form>
                </article>
            )}
            {!editTitle && (
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to="/">Visit Our Homepage</Link>
                    </p>
                </>
            )}
        </main>
    );
};

export default EditPost;
