import React from 'react'
import CreatePost from '../CreatePost'
import Post from '../Post'
import Posts from '../Posts'
import './style.scss'

function Home() {
    return (
        <>
            <CreatePost />
            {/* <Post /> */}
            <Posts />
        </>
    )
}

export default Home