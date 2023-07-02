import { addFriendAPI, loginAPI, loginWithCookieAPI, removeFriendAPI, resetPasswordApi } from "../apiUtils";

const initialState = {
    name: '',
    username: '',
    success: false,
    message: '',
    friendList: []
}

const ACTIONS = {
    LOGIN: 'LOGIN',
    SIGNUP: 'SIGNUP',
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    MESSAGE: 'MESSAGE',
    RESET_PASSWORD: 'RESET_PASSWORD',
}

const errorActionCreator = (payload) => {
    return { type: ACTIONS.MESSAGE, payload }
}

export const loginActionCreator = (payload) => {
    return async (dispatch) => {
        try {
            const { data } = await loginAPI(payload);
            console.log(data);
            dispatch({ type: ACTIONS.LOGIN, payload: data })
        } catch (error) {
            console.error(error.response.data);
            dispatch(errorActionCreator(error.response.data))
        }
    }
}

export const cookieLoginActionCreator = () => {
    return async (dispatch) => {
        try {
            const { data } = await loginWithCookieAPI();
            dispatch({ type: ACTIONS.LOGIN, payload: data })
        } catch (error) {
            console.error(error.response.data);
            dispatch(errorActionCreator(error.response.data))
        }
    }
}

export const addFriendActionCreator = (apiPayload) => {
    return async (dispatch) => {
        try {
            const { data } = await addFriendAPI(apiPayload);
            console.log(data);
            dispatch({ type: ACTIONS.ADD_FRIEND, payload: data })
        } catch (error) {
            console.error(error.response.data);
            dispatch(errorActionCreator(error.response.data))
        }
    }
}

export const removeFriendActionCreator = (apiPayload) => {
    return async (dispatch) => {
        try {
            const { data } = await removeFriendAPI(apiPayload);
            console.log(data);
            dispatch({ type: ACTIONS.REMOVE_FRIEND, payload: data })
        } catch (error) {
            console.error(error.response.data);
            dispatch(errorActionCreator(error.response.data))
        }
    }
}

export const resetPasswordActionCreator = (apiPayload) => {
    return async (dispatch) => {
        try {
            const { data } = await resetPasswordApi(apiPayload);
            dispatch({ type: ACTIONS.RESET_PASSWORD, payload: data })
        } catch (error) {
            console.error(error.response.data);
            dispatch(errorActionCreator(error.response.data))
        }
    }
}


export const userReducer = (state = initialState, action) => {
    const { type, payload } = action
    const { success, message, data } = payload || {}
    switch (type) {
        case ACTIONS.LOGIN:
            const { name, username, friendList } = data || {}
            return { ...state, name, username, friendList, message, success }
        case ACTIONS.ADD_FRIEND:
        case ACTIONS.REMOVE_FRIEND:
            return { ...state, friendList: data, message, success }
        case ACTIONS.MESSAGE:
        case ACTIONS.RESET_PASSWORD:
            return { ...state, message, success }
        default:
            return state
    }
}