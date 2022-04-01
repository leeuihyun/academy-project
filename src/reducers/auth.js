import { createAction, handleActions } from "redux-actions";
import { put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const logInRequest = createAction(LOG_IN_REQUEST, (data) => data);
export const logOutRequest = createAction(LOG_OUT_REQUEST);
export const registerRequest = createAction(REGISTER_REQUEST, (data) => data);

const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: null,
    registerLoading: false,
    registerDone: false,
    registerError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    user: null,
    registerData: {},
    logInData: {},
};

function logInApi(data) {
    return axios.post("/logIn/api", data);
}
function logOutApi(data) {
    return axios.post("logOut/api", data);
}
function registerApi(data) {
    return axios.post("register/api", data);
}
function* logIn(action) {
    try {
        //const res = yield call(logInApi, action.payload);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
        //console.log("LOG_IN_SAGA_SUCCESS");
    } catch (err) {
        console.log(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function* logOut(action) {
    try {
        //const res = yield call(logOutApi, action.payload);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            //data : res.data
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}
function* register(action) {
    try {
        //const res = yield call(registerApi,action.data);
        yield delay(1000);
        yield put({
            type: REGISTER_SUCCESS,
            //data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: REGISTER_FAILURE,
            error: error.response.data,
        });
    }
}
export function* authSaga() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
    yield takeLatest(LOG_OUT_REQUEST, logOut);
    yield takeLatest(REGISTER_REQUEST, register);
}
//

const dummyUser = (data) => ({
    ...data, //id,password받아옴
    nickname: "vanc",
    studentList: [
        {
            studentId: 1,
            name: "mrlee",
            text: "첫 학생 메모 테스트",
        },
        {
            studentId: 2,
            name: "mrlee2",
            text: "두번째 학생 메모 테스트",
        },
    ],
});
const auth = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) => ({
            ...state,
            logInLoading: true,
            logInError: null,
            logInDone: false,
        }),
        [LOG_IN_SUCCESS]: (state, action) => ({
            ...state,
            logInLoading: false,
            logInDone: true,
            user: dummyUser(action.data),
        }),
        [LOG_IN_FAILURE]: (state, action) => ({
            ...state,
            logInError: action.error,
            logInLoading: false,
        }),
        [LOG_OUT_REQUEST]: (state) => ({
            ...state,
            logOutLoading: true,
            logOutDone: false,
            logOutError: null,
        }),
        [LOG_OUT_SUCCESS]: (state, action) => ({
            ...state,
            logOutLoading: false,
            logOutDone: true,
            user: null,
        }),
        [LOG_OUT_FAILURE]: (state, action) => ({
            ...state,
            logOutLoading: false,
            logOutError: action.error,
        }),
        [REGISTER_REQUEST]: (state, action) => ({
            ...state,
            registerLoading: true,
            registerDone: false,
            registerError: null,
        }),
        [REGISTER_SUCCESS]: (state, action) => ({
            ...state,
            registerLoading: false,
            registerDone: true,
            registerError: null,
        }),
        [REGISTER_FAILURE]: (state, action) => ({
            ...state,
            registerError: action.error,
            registerLoading: false,
        }),
    },
    initialState
);

export default auth;
