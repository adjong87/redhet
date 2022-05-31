import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";


function Subreddit() {
    const [posts, setPosts] = useState({});
    const [error, toggleError] = useState(false)

    let {id} = useParams();

    useEffect(() => {
        async function fetchData(subIdInput) {
            toggleError(false)

            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                setPosts(result.data);
                console.log(posts)
            } catch (e) {
                console.error(e);
                toggleError(true)
            }
        }

        fetchData(id)
    }, [id]);

    return (
        <>
        {error && <span>Er ging wat mis!</span>}
        <Header
                title={posts.data.display_name_prefixed}/>
                <div className="outer-container">
                    <div className="left-container">
                        <p>left-container</p>
                    </div>
                    <div className="inner-container">
                        {Object.keys(posts).length > 0 && posts.map((post) => {
                            return <Post
                                title={post.data.title}
                                subredditID={post.data.subreddit_id}
                                prefix={post.data.subreddit_name_prefixed}
                                comments={post.data.num_comments}
                                ups={post.data.ups}/>
                        })
                        }
                    </div>
                    <div className="right-container">
                        <p>right-container</p>
                    </div>
                </div>
        </>
    );
}

export default Subreddit;