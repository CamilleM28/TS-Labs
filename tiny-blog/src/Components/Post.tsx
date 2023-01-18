import IPost from "../Types/IPost";
import "../Styles/Post.css"

interface IPostData {
    post: IPost;
}

const Post = ({post}: IPostData) => {
    return <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Tags:{" "}{post.tags.map(tag => <span><b>{tag}{" "}</b></span>)}</p>
    </div>
}

export default Post; 