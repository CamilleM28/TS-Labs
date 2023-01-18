import {Link} from "react-router-dom";
import "../Styles/Hearder.css"

const Header = () => {
    return <div className="header">
        <h1 className="title">Tiny Blog</h1>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/all">All Posts</Link>
        </div>
    </div>
}

export default Header;