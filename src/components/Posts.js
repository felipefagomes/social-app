import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';


function Posts() {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        axios.get(url)
            .then( res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch( error => {
                console.log(error);
            })
    }, []);

    return(
        <div>
            {
                posts.map( (post) => {
                    return (
                        <div className='post'>
                            <div className='title'> {post.title} </div>
                            <div className='body'> {post.body} </div>
                            <div className='footer'> {post.userId} </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Posts;