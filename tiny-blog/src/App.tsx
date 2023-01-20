import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPost from "./Types/IPost";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import FilteredPostList from "./Components/FilteredPostList";

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { body: "", id: 0, reactions: 0, tags: [], title: "", userID: 0 },
  ]);
  const tags = ["love", "crime", "mystery", "history", "fiction"];
  const [filteredPosts, setFilteredPosts] = useState<{ label: string; value: IPost[]}[]>([
      {label: "", value:  [{body: "", id: 0, reactions: 0, tags: [], title: "", userID: 0 }]},
      {label: "", value:  [{body: "", id: 0, reactions: 0, tags: [], title: "", userID: 0 }]}
      ]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://dummyjson.com/posts/");
      const posts = await res.json();

      setPosts(posts.posts);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const postFilter = (): void => {
      const filtered = tags.map((tag) =>
        { return {label: tag, value: posts.filter((posts) => posts.tags.includes(tag))}}
      );
      console.log(filtered);
      setFilteredPosts(filtered);
    };
    postFilter();
  }, [posts]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <FilteredPostList posts={filteredPosts} />
            </>
          }
        />
        <Route
          path="all"
          element={
            <>
              <Header />
              <PostList posts={posts} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
