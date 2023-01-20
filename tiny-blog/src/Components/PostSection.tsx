import { useState } from "react";
import IPost from "../Types/IPost";
import Post from "./Post";
import "../Styles/Section.css";

interface ISection {
  list: IPost[];
  label: string;
}

const PostSection = ({ list, label }: ISection) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="section-header" onClick={() => setOpen(!open)}>
        <h1 className="category-heading">{label}</h1>
        <p className="arrow">{open ? "\u1431" : "\u142F"}</p>
      </div>
      <div className="dropdown" style={{ height: open ? "50em" : "0" }}>
        {list.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostSection;
