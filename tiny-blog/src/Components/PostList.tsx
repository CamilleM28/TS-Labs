import IPost from "../Types/IPost";
import Post from "./Post";
import "../Styles/List.css"

interface IAllPosts {
    posts: IPost[];
}

const PostList = ({posts} : IAllPosts) => {
    return <>
        <h1 className="subheading">All Posts</h1>
        {
           posts.map((post) => <Post key={post.id} post={post}/>) 
        }
    </>
}
export default PostList 