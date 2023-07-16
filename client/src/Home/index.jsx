import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { POST_API } from '../apiUtils'
import CreatePost from '../CreatePost'
import Post from '../Post'
import Posts from '../Posts'
import { messageActionCreator } from '../reducers/userReducer'
import './style.scss'

function Home() {
    const [postText, setPostText] = useState('')
    const [image, setImage] = useState(null)

    const [postData, setPostData] = useState([])

    const dispatch = useDispatch();


    const apiFnWrapper = async (apiHelper, payload) => {
        let message, apiSuccess;
        try {
            const { data, message: messageResponse, success } = await (await apiHelper(payload)).data;
            console.log({ data }, { messageResponse }, success);
            apiSuccess = success;
            message = messageResponse
            return { data }
        } catch (error) {
            apiSuccess = false
            message = error?.response?.data?.message;
        }
        finally {
            dispatch(messageActionCreator({ message, success: apiSuccess }))
        }
    }

    const getPosts = async () => {
        try {
            const { data } = await apiFnWrapper(POST_API.getPostAPI);
            if (data) {
                setPostData(data)
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const invokePostApi = async () => {
        try {
            const payload = { text: postText };
            if (image) {
                payload.image = image;
            }
            const { data } = await apiFnWrapper(POST_API.createPostAPI, payload);
            setPostText('');
            getPosts()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <CreatePost invokePostApi={invokePostApi} postText={postText} setPostText={setPostText} image={image} setImage={setImage} />
            <Posts apiFnWrapper={apiFnWrapper} getPosts={getPosts} postData={postData} setPostData={setPostData} />
        </>
    )
}

export default Home