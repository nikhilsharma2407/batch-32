import axios from "axios"

const instance = axios.create({ baseURL: 'http://localhost:4000', withCredentials:true })

const ENDPOINTS = {
    LOGIN: '/user/login',
    SIGNUP: '/user/signup',
    ADD_FRIEND: '/user/addFriend',
    REMOVE_FRIEND: '/user/removeFriend',
    RESET:'user/reset',
}


export const loginAPI = (payload) => {
    return instance.post(ENDPOINTS.LOGIN, payload)
}

export const loginWithCookieAPI = () => {
    return instance.get(ENDPOINTS.LOGIN)
}

export const signupAPI = (payload) => {
    return instance.post(ENDPOINTS.SIGNUP, payload)
}

export const addFriendAPI = (payload) => {
    return instance.patch(ENDPOINTS.ADD_FRIEND, payload)
}

export const removeFriendAPI = (payload) => {
    return instance.patch(ENDPOINTS.REMOVE_FRIEND, payload)
}

export const resetPasswordApi = (payload)=>{
    return instance.patch(ENDPOINTS.RESET,payload);
}