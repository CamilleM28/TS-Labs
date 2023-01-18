import IPost from "../Types/IPost";
import Post from "./Post";
import "../Styles/Section.css"
import {useState} from "react";

interface IAllCrimePosts {
    posts: IPost[];
}

const CrimePostList = ({posts}: IAllCrimePosts) => {
    const [open, setOpen] = useState(false)
    
    return <>
        <div className="section-header" onClick={() => setOpen(!open)}>
            <h1 className="category-heading">Crime</h1>
            <p className="arrow">{open ? '\u1431' : '\u142F'}</p>
        </div>
        <div className="dropdown" style={{height: open ? "50em" : "0"}}>
            {
                posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    </>
}

export default CrimePostList; 