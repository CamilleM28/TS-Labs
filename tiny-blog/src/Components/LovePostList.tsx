import IPost from "../Types/IPost";
import Post from "./Post";
import "../Styles/Section.css"
import {useState} from "react";

interface IAllLovePosts {
    posts: IPost[];
}

const LovePostList = ({posts}: IAllLovePosts) => {
    const [open, setOpen] = useState(false)

    return <>
        <div className="section-header">
            <h1 className="category-heading">Love</h1>
            <button onClick={() => setOpen(!open)}>{open ? '\u1431' : '\u142F'}</button>
        </div>
        <div className="dropdown" style={{height: open ? "50em" : "0"}}>
            {
                posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    </>
}

export default LovePostList; 