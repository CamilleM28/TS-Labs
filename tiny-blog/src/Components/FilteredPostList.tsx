import IPost from "../Types/IPost";
import Post from "./Post";
import PostSection from "./PostSection";
import "../Styles/List.css";
import { useState } from "react";

interface IFilteredPosts {
  tags: string[];
  posts: IPost[][];
}

const FilteredPostList = ({ posts, tags }: IFilteredPosts) => {
  return (
    <>
      <h1 className="subheading">Home</h1>
      {posts.map((section) => (
        <PostSection
          list={section}
          tags={tags}
          index={posts.indexOf(section)}
        />
      ))}
    </>
  );
};

export default FilteredPostList;
