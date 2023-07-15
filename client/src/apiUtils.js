import axios from "axios"

const instance = axios.create({ baseURL: 'http://localhost:4000', withCredentials: true })

const ENDPOINTS = {
    LOGIN: '/user/login',
    SIGNUP: '/user/signup',
    ADD_FRIEND: '/user/addFriend',
    REMOVE_FRIEND: '/user/removeFriend',
    RESET: 'user/reset',
    LOGOUT: 'user/logout',

    POST_API: {
        GET_POSTS: 'post/getPosts',
        LIKE: 'post/like/',
        DELETE: 'post/delete/',
        CREATE_POST: 'post/create'
    }
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

export const resetPasswordApi = (payload) => {
    return instance.patch(ENDPOINTS.RESET, payload);
}

export const logoutApi = () => {
    return instance.get(ENDPOINTS.LOGOUT);
}

export const POST_API = {
    getPostAPI: () => {
        return instance.get(ENDPOINTS.POST_API.GET_POSTS)
    },
    createPostAPI: (payload) => {
        return instance.post(ENDPOINTS.POST_API.CREATE_POST, payload)
    },

    likePostAPI: (id) => {
        return instance.patch(ENDPOINTS.POST_API.LIKE + id)
    },
    deletePostAPI: (id) => {
        return instance.delete(ENDPOINTS.POST_API.DELETE + id)
    }
}