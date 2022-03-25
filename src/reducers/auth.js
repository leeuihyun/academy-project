import { createAction, handleActions } from "redux-actions";

const LOG_IN_REQUEST = "auth/LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "auth/LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "auth/LOG_IN_FAILURE";

const LOG_OUT_REQUEST = "auth/LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "auth/LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "auth/LOG_OUT_FAILURE";

const REGISTER_REQUEST = "auth/REGISTER_REQUEST";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

export const logInRequest = createAction(LOG_IN_REQUEST, (data) => data);
export const logOutRequest = createAction(LOG_OUT_REQUEST);
export const registerRequest = createAction(REGISTER_REQUEST, (data) => data);

const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    user: null,
    registerData: {},
    loginData: {},
    studentList: [
        {
            name: "mrlee",
            text: "첫 학생 메모 테스트",
        },
        {
            name: "mrlee2",
            text: "두번째 학생 메모 테스트",
        },
    ],
};

const auth = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) => ({
            ...state,
            isLoggedIn: false,
            isLoggingIn: true,
            user: action.payload, //나중에 바꿔야함 테스트하기 위함 (saga 이전)
        }),
        [LOG_IN_SUCCESS]: (state, action) => ({
            ...state,
            isLoggedIn: true,
            isLoggingIn: false,
            user: action.payload,
        }),
        [LOG_IN_FAILURE]: (state, action) => ({
            ...state,
            isLoggedIn: false,
            isLoggingIn: false,
        }),
        [LOG_OUT_REQUEST]: (state) => ({
            ...state,
            isLoggingOut: true,
        }),
        [LOG_OUT_SUCCESS]: (state) => ({
            ...state,
            isLoggingOut: false,
            user: null,
        }),
        [LOG_OUT_FAILURE]: (state) => ({
            ...state,
            isLoggingOut: false,
        }),
        [REGISTER_REQUEST]: (state, action) => ({
            ...state,
        }),
        [REGISTER_SUCCESS]: (state, action) => ({
            ...state,
        }),
        [REGISTER_FAILURE]: (state, action) => ({
            ...state,
        }),
    },
    initialState
);

export default auth;
