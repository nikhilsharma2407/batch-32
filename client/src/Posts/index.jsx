import React, { useEffect, useState } from 'react'
import { POST_API } from '../apiUtils'
import Post from '../Post';



function Posts() {

    const [postData, setPostData] = useState([])
    const getPosts = async () => {
        try {
            const { data } = await (await POST_API.getPostAPI()).data;
            setPostData(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPosts();
    }, []);


    const likePost = async (id) => {
        try {
            const { data: updatedPost } = await (await POST_API.likePostAPI(id)).data;

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
            const { data:deletedPost } =  await (await POST_API.deletePostAPI(id)).data;
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