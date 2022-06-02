import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css'
import Post from '../../components/post/Post'
import Header from "../../components/header/Header";
import logo from '../../assets/logo.png'

function Home() {
    const [posts, setPosts] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                setPosts(result.data.data.children);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
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



                <div className="home-outer-container">
                    <div className="left-container">

                        {/*left container*/}

                    </div>
                    {isLoading ? (<h1>Loading ...</h1>) : (

                        <div className="inner-container">
                        <ul>
                            {Object.keys(posts).length > 0 && posts.map((post) => {
                                return <Post
                                    key={post.data.subreddit}
                                    title={post.data.title}
                                    subredditID={post.data.subreddit}
                                    prefix={post.data.subreddit_name_prefixed}
                                    comments={post.data.num_comments}
                                    ups={post.data.ups}/>
                            })
                            }
                        </ul>
                    </div>)}
                    <div className="right-container">

                        {/*right container*/}

                    </div>
                </div>

        </>
    );
}

export default Home;