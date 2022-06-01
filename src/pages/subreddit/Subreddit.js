import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Header from "../../components/header/Header";

function Subreddit() {
    const [posts, setPosts] = useState(null);
    const [error, toggleError] = useState(false)

    const { subredditId } = useParams();

    useEffect(() => {
        async function fetchData() {
            toggleError(false)

            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                setPosts(result.data.data);
                console.log(posts)
            } catch (e) {
                console.error(e);
                toggleError(true)
            }
        }

        fetchData()

    }, []);

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
                        subreddit
                    </div>
                    <div className="right-container">
                        <p>right-container</p>
                    </div>
                </div>
        </>
    );
}

export default Subreddit;