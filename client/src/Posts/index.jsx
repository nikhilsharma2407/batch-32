import React, { useEffect, useState } from 'react'
import { POST_API } from '../apiUtils'
import Post from '../Post';



function Posts({getPosts, postData, setPostData, apiFnWrapper}) {

    useEffect(() => {
        getPosts();
    }, []);


    const likePost = async (id) => {
        try {
            const { data: updatedPost } = await (apiFnWrapper(POST_API.likePostAPI,id));

            const updatedData = postData.map(data => {
                if (data._id === updatedPost._id) {
                    return updatedPost
                }
                return data
            });
            setPostData(updatedData);
        } catch (error) {
            console.log(error?.response?.data);
        }
    };

    const deletePost = async (id) => {
        try {
            const { data:deletedPost } =  await(apiFnWrapper(POST_API.deletePostAPI,id));
            console.log(deletedPost);
            const updatedData = postData.filter(data => data._id !== deletedPost._id);
            setPostData(updatedData);
        } catch (error) {
            console.log(error?.response?.data);
        }
    }

    // fetch post data and pass it as props
    return (
        postData.map(data => <Post data={data} key={data._id} like={likePost} deletePost={deletePost} />)

    )
}

export default Posts