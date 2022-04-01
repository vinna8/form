import { authAPI } from "../api/api";
import { instance } from "../api/api";
import { clearAuthUserData, isDisabled, setAuthUserData, setError, toggleIsFetching } from "./actions";
import  { SET_USER_DATA, SET_ERROR, CLEAR_USER_DATA, TOGGLE_IS_FETCHING, DISABLED } from "./types";

let initialState = {
    users: [],
    isAuth: false,
    isFetching: false,
    isDisabled: false,
    message: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_ERROR:
            return {
                ...state,
                ...action.data,
            }
        case CLEAR_USER_DATA:
            return {
                ...state,
                isAuth: false
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, 
                isFetching: action.isFetching
            }
        case DISABLED:
            return {
                ...state, 
                isDisabled: action.isDisabled
            }
        default:
            return state;
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(isDisabled(false));
        dispatch(toggleIsFetching(true));
        return authAPI.me()
        .then(response => {
            dispatch(toggleIsFetching(false));
            if (response.data.activated){
                localStorage.setItem('users', JSON.stringify(response.data))
                let users = response.data;
                dispatch(setAuthUserData(users, true));
            }
        })
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(isDisabled(true));
        authAPI.login(email, password)
        .then(response => {
            dispatch(isDisabled(false));
            if (response.data.token){
                localStorage.setItem('token', response.data.token)
                instance.defaults.headers.common['Authorization'] = `${localStorage.token}`
                dispatch(setError(null));
                dispatch(getAuthUserData());
            } else {
                let message = response.data.error.message
                dispatch(setError(message));
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(clearAuthUserData());
        /*window.location.href = '/login';*/
    }
}

export default authReducer;
