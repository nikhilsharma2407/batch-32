import axios from "axios"

const instance = axios.create({ baseURL: 'http://localhost:4000', withCredentials:true })

const ENDPOINTS = {
    LOGIN: '/user/login',
    SIGNUP: '/user/signup',
    ADD_FRIEND: '/user/addFriend',
    REMOVE_FRIEND: '/user/removeFriend',
}


export const loginAPI = (payload) => {
    return instance.post(ENDPOINTS.LOGIN, payload)
}

export const signupAPI = (payload) => {
    return instance.post(ENDPOINTS.SIGNUP, payload)
}

export const addFriendAPI = (payload) => {
    return instance.post(ENDPOINTS.ADD_FRIEND, payload)
}

export const removeFriendAPI = (payload) => {
    return instance.post(ENDPOINTS.REMOVE_FRIEND, payload)
}