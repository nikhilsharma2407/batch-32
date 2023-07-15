import { addFriendAPI, loginAPI, loginWithCookieAPI, logoutApi, removeFriendAPI, resetPasswordApi } from "../apiUtils";

const initialState = {
    name: '',
    username: '',
    success: false,
    message: '',
    friendList: [],
    loading:false
}

const ACTIONS = {
    LOGIN: 'LOGIN',
    SIGNUP: 'SIGNUP',
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    MESSAGE: 'MESSAGE',
    RESET_PASSWORD: 'RESET_PASSWORD',
    LOADING: 'LOADING',
    LOGOUT: 'LOGOUT',
}

export const messageActionCreator = (payload = '') => {
    return { type: ACTIONS.MESSAGE, payload }
}

const loadingActionCreator = (payload = false) => {
    return { type: ACTIONS.LOADING, payload }
}

const asyncActionCreator = (type, apiHelper, apiPayload,callback=()=>{}) => {
    return async (dispatch) => {
        try {
            dispatch(messageActionCreator())
            dispatch(loadingActionCreator(true));
            const { data } = await apiHelper(apiPayload);
            console.log(data);
            dispatch({ type, payload: data })
            callback()
        } catch (error) {
            console.error(error?.response?.data);
            dispatch(messageActionCreator(error?.response?.data))
        } finally {
            dispatch(loadingActionCreator(false));
        }
    }
}

export const loginActionCreator = (apiPayload) => {
    // return async (dispatch) => {
    //     try {
    //         const { data } = await loginAPI(payload);
    //         console.log(data);
    //         dispatch({ type: ACTIONS.LOGIN, payload: data })
    //     } catch (error) {
    //         console.error(error.response.data);
    //         dispatch(errorActionCreator(error.response.data))
    //     }
    // }
    return asyncActionCreator(ACTIONS.LOGIN,loginAPI,apiPayload);
}

export const cookieLoginActionCreator = () => {
    // return async (dispatch) => {
    //     try {
    //         const { data } = await loginWithCookieAPI();
    //         dispatch({ type: ACTIONS.LOGIN, payload: data })
    //     } catch (error) {
    //         console.error(error.response.data);
    //         dispatch(errorActionCreator(error.response.data))
    //     }
    // }
    return asyncActionCreator(ACTIONS.LOGIN,loginWithCookieAPI);
}

export const addFriendActionCreator = (apiPayload) => {
    // return async (dispatch) => {
    //     try {
    //         const { data } = await addFriendAPI(apiPayload);
    //         console.log(data);
    //         dispatch({ type: ACTIONS.ADD_FRIEND, payload: data })
    //     } catch (error) {
    //         console.error(error.response.data);
    //         dispatch(errorActionCreator(error.response.data))
    //     }
    // }
    return asyncActionCreator(ACTIONS.ADD_FRIEND,addFriendAPI,apiPayload);
}

export const removeFriendActionCreator = (apiPayload) => {
    // return async (dispatch) => {
    //     try {
    //         const { data } = await removeFriendAPI(apiPayload);
    //         console.log(data);
    //         dispatch({ type: ACTIONS.REMOVE_FRIEND, payload: data })
    //     } catch (error) {
    //         console.error(error.response.data);
    //         dispatch(errorActionCreator(error.response.data))
    //     }
    // }
    return asyncActionCreator(ACTIONS.REMOVE_FRIEND,removeFriendAPI,apiPayload);
}

export const resetPasswordActionCreator = (apiPayload,callback) => {
    // return async (dispatch) => {
    //     try {
    //         const { data } = await resetPasswordApi(apiPayload);
    //         dispatch({ type: ACTIONS.RESET_PASSWORD, payload: data })
    //     } catch (error) {
    //         console.error(error.response.data);
    //         dispatch(errorActionCreator(error.response.data))
    //     }
    // }
    return asyncActionCreator(ACTIONS.RESET_PASSWORD,resetPasswordApi,apiPayload,callback);

}

export const logoutActionCreator = ()=>{
    return asyncActionCreator(ACTIONS.LOGOUT,logoutApi);
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
        case ACTIONS.LOADING:
            return {...state, loading:payload}
        
        case ACTIONS.LOGOUT:
            return {...initialState, message,success}
        default:
            return state
    }
}