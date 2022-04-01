import  { SET_USER_DATA, SET_ERROR, CLEAR_USER_DATA, TOGGLE_IS_FETCHING, DISABLED} from "./types";

export const setAuthUserData = (users, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {users, isAuth}
    };
}

export const setError = (message) => {
    return {
        type: SET_ERROR,
        data: {message}
    };
}

export const clearAuthUserData = () => {
    return {
        type: CLEAR_USER_DATA,
    };
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
}

export const isDisabled = (isDisabled) => {
    return {
        type: DISABLED,
        isDisabled
    };
}