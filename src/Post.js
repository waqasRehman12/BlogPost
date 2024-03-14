import { Link } from "react-router-dom";
// import img from "../src/assests/download.png";
const Post = ({ post }) => {
    return (
        <article className="post">
            <div>
                <Link to={`/post/${post.id}`}>
                    <h2 className="postName">{post.title}</h2>
                    <p className="postDate">{post.datetime}</p>
                </Link>
                <p className="postBody">
                    {post.body.length <= 25 ? post.body : `${post.body.slice(0, 24)}...`}
                </p>
            </div>
            {/* <figure>
                <img src={img} alt="loading.." />{" "}
            </figure> */}
        </article>
    );
};

export default Post;
