import React, { useState, useEffect } from 'react'
import Post from './components/Post'
import { db } from './firebase'
//Import Images
import Miki from './img/miki.jpg'
import MikiLk from './img/mikiLk.jpg'
import Natu from './img/natu.jpg'

function PostData() {
    const [posts, setPosts] = useState([

    ])

    //useEffect runs a piece of code based on specific condition
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            {
                posts.map(post => (
                    <Post username={post.username} caption={post.caption} ImageUrl={post.ImageUrl} />
                ))
            }
            <Post />
        </div>
    )
}

export default PostData