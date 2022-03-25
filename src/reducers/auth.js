import { createAction, handleActions } from "redux-actions";
import { all, fork, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";

export const logInRequest = createAction(LOG_IN_REQUEST, (data) => data);
export const logOutRequest = createAction(LOG_OUT_REQUEST);
export const registerRequest = createAction(REGISTER_REQUEST, (data) => data);

function logInApi(data) {
    return axios.post("/logIn/api", data);
}
function logOutApi(data) {
    return axios.post("logOut/api");
}

function* logIn(action) {
    try {
        //const res = yield call(logInApi, action.payload);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            payload: action.payload,
        });
        //console.log("LOG_IN_SAGA_SUCCESS");
    } catch (err) {
        console.log(err);
        yield put({
            type: LOG_IN_FAILURE,
            payload: err.response.data,
        });
    }
}

function* logOut(action) {
    try {
        //const res = yield call(logOutApi, action.payload);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            //payload : res.data
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: LOG_OUT_FAILURE,
        });
    }
}

export function* authSaga() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
//
const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    user: null,
    registerData: {},
    logInData: {},
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
            isLoggingIn: true,
            //user: action.payload, //나중에 바꿔야함 테스트하기 위함 (saga 이전)
        }),
        [LOG_IN_SUCCESS]: (state, action) => ({
            ...state,
            isLoggedIn: true,
            isLoggingIn: false,
            user: action.payload,
        }),
        [LOG_IN_FAILURE]: (state) => ({
            ...state,
            isLoggingIn: false,
        }),
        [LOG_OUT_REQUEST]: (state) => ({
            ...state,
            isLoggingOut: true,
        }),
        [LOG_OUT_SUCCESS]: (state, action) => ({
            ...state,
            isLoggedIn: false,
            isLoggingOut: false,
            user: action.payload,
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
