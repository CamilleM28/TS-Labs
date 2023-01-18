import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IPost from "./Types/IPost";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import SectionList from "./Components/SectionList";

const App = () => {

    const [posts, setPosts] = useState<IPost[]>([{body: "", id: 0, reactions: 0, tags: [], title: "", userID: 0}]);
    const [lovePosts, setLovePosts] = useState<IPost[]>([{
        body: "",
        id: 0,
        reactions: 0,
        tags: [],
        title: "",
        userID: 0
    }])
    const [crimePosts, setCrimePosts] = useState<IPost[]>([{
        body: "",
        id: 0,
        reactions: 0,
        tags: [],
        title: "",
        userID: 0
    }])
    const [mysteryPosts, setMysteryPosts] = useState<IPost[]>([{
        body: "",
        id: 0,
        reactions: 0,
        tags: [],
        title: "",
        userID: 0
    }])
    const [historyPosts, setHistoryPosts] = useState<IPost[]>([{
        body: "",
        id: 0,
        reactions: 0,
        tags: [],
        title: "",
        userID: 0
    }])
    const [fictionPosts, setFictionPosts] = useState<IPost[]>([{
        body: "",
        id: 0,
        reactions: 0,
        tags: [],
        title: "",
        userID: 0
    }])

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('https://dummyjson.com/posts/')
            const posts = await res.json();

            setPosts(posts.posts)

        }

        getPosts()
    }, [])


    useEffect(() => {
        const postFilter = (): void => {
            const filteredLovePosts = posts.filter(posts => posts.tags.includes("love"))
            const filteredCrimePosts = posts.filter(posts => posts.tags.includes("crime"))
            const filteredMysteryPosts = posts.filter(posts => posts.tags.includes("mystery"))
            const filteredHistoryPosts = posts.filter(posts => posts.tags.includes("history"))
            const filteredFictionPosts = posts.filter(posts => posts.tags.includes("fiction"))
            setLovePosts(filteredLovePosts);
            setCrimePosts(filteredCrimePosts);
            setMysteryPosts(filteredMysteryPosts);
            setHistoryPosts(filteredHistoryPosts);
            setFictionPosts(filteredFictionPosts);
        }
        postFilter()

    }, [posts])


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>
                    <Header/>
                    <SectionList lovePosts={lovePosts} crimePosts={crimePosts} mysteryPosts={mysteryPosts}
                                 historyPosts={historyPosts} fictionPosts={fictionPosts}/>
                </>}/>
                <Route path="all" element={<>
                    <Header/>
                    <PostList posts={posts}/>
                </>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
