import IPost from "../Types/IPost";
import LovePostList from "./LovePostList";
import CrimePostList from "./CrimePostList";
import MysteryPostList from "./MysteryPostList";
import HistoryPostList from "./HistoryPostList";
import FictionPostList from "./FictionPostList";
import "../Styles/List.css"


interface ISections {
    lovePosts: IPost[];
    crimePosts: IPost[];
    mysteryPosts: IPost[];
    historyPosts: IPost[];
    fictionPosts: IPost[];
}

const SectionList = ({lovePosts, crimePosts, mysteryPosts, historyPosts, fictionPosts }: ISections) => {
    return <>
        <h1 className="subheading">Home</h1>
        <LovePostList posts={lovePosts}/>
        <CrimePostList posts={crimePosts}/>
        <MysteryPostList posts={mysteryPosts}/>
        <HistoryPostList posts={historyPosts}/>
        <FictionPostList posts={fictionPosts}/>
    </>
} 

export default SectionList;