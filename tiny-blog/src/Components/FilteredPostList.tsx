import IPost from "../Types/IPost";
import PostSection from "./PostSection";
import "../Styles/List.css";

interface IFilteredPosts {
  posts: { label: string; value: IPost[]}[];
}

const FilteredPostList = ({ posts }: IFilteredPosts) => {
  return (
    <>
      <h1 className="subheading">Home</h1>
      {posts.map((section) => (
        <PostSection
            key={posts.indexOf(section)}
          list={section.value}
            label={section.label}
        />
      ))}
    </>
  );
};

export default FilteredPostList;
