import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "./api/Posts";
import DataContext from "./Context/DataContext";

const NewPost = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const { posts, setPosts } = useContext(DataContext);
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = { id, title: postTitle, datetime, body: postBody };
        try {
            const response = await api.post("/posts", newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle("");
            setPostBody("");
            history.push("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };
    return (
        <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle" className="postTitle">
                {" "}
                Title:
            </label>
            <input
                id="postTitle"
                className="postTitleTextfield"
                value={postTitle}
                required
                type="text"
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody" className="postBody">
                Post:
            </label>
            <textarea
                id="postBody"
                className="postBodyTextfield"
                value={postBody}
                required
                onChange={(e) => setPostBody(e.target.value)}
            />
            <button className="postButton" type="submit">
                Post
            </button>
        </form>
    );
};

export default NewPost;
