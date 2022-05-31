import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Post.css'
import shortener from "../../helpers/shortener";

function Post({title, subredditID, prefix, comments, ups}) {
    return (

            <li className="post" key={subredditID}>
                <h3 className="postTitle">
                    <Link to={'${subredditID}'}>{title}
                    </Link>
                </h3>
                <span className="preFixed">{prefix}</span>
                <p className="postFootNote">Comments {comments} -- Ups   {ups}</p>
            </li>

    );
}

export default Post;
