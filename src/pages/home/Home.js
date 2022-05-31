import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css'
import Post from '../../components/post/Post'
import Header from "../../components/header/Header";
import logo from '../../assets/logo.png'

function Home() {
    const [posts, setPosts] = useState({});
    const [error, toggleError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleError(false)
            setIsLoading(true);
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                setPosts(result.data.data.children);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
                toggleError(true)
            }
        }

        fetchData()
    }, []);

    return (
        <>
            <Header
                image={logo}
                title="REDDIT"
            />

            {isLoading ? (<p>Loading ...</p>) : (

                <div className="home-outer-container">
                    <div className="left-container">
                        <p>left-container</p>
                    </div>
                    <div className="inner-container">
                        <uL>
                            {Object.keys(posts).length > 0 && posts.map((post) => {
                                return <Post
                                    title={post.data.title}
                                    subredditID={post.data.id}
                                    prefix={post.data.subreddit_name_prefixed}
                                    comments={post.data.num_comments}
                                    ups={post.data.ups}/>
                            })
                            }
                        </uL>
                    </div>
                    <div className="right-container">
                        <p>right-container</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;