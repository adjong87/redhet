import {Link} from "react-router-dom";
import './Post.css'

function Post({key, title, subredditID, prefix, comments, ups}) {
    return (
            <li className="post" key={key}>
                <h3 className="postTitle">
                    <Link to={`/subreddit/${subredditID}`}>
                        {title}
                    </Link>
                </h3>
                <span className="preFixed">{prefix}</span>
                <span className="postFootNote">Comments {comments} - Ups   {ups}</span>
            </li>

    );
}

export default Post;
