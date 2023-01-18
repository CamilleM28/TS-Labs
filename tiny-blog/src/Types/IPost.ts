interface IPost {
    id: number;
    title: string;
    body: string;
    userID: number;
    tags: string[];
    reactions: number;
}

export default IPost;