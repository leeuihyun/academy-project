import axios from "axios";
import { takeLatest, all, call, fork, put, delay } from "redux-saga/effects";
import {
    LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAILURE,
    CHANGE_STUDENT_REQUEST,
    CHANGE_STUDENT_SUCCESS,
    CHANGE_STUDENT_FAILURE,
} from "../reducers/user";

function logInApi() {
    return axios.post("/login");
}
function* logIn(action) {
    try {
        //const res = yield call(logInApi, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LOG_IN_FAILURE,
            data: error.response.data,
        });
    }
}
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logOutApi() {
    return axios.post("/logOut");
}

function* logOut(action) {
    try {
        yield delay(1000);
        //const res = yield call(logOutApi,action.data);
        yield put({
            type: LOG_OUT_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LOG_OUT_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function signUpApi() {
    axios.post("/signup");
}

function* signUp(action) {
    try {
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: SIGN_UP_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function addStudentApi() {
    axios.post("/addstudent");
}

function* addStudent(action) {
    try {
        yield delay(1000);
        yield put({
            type: ADD_STUDENT_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: ADD_STUDENT_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchAddStudent() {
    yield takeLatest(ADD_STUDENT_REQUEST, addStudent);
}

function changeStudentApi() {
    axios.post("/changestudent");
}

function* changeStudent(action) {
    try {
        yield delay(1000);
        yield put({
            type: CHANGE_STUDENT_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: CHANGE_STUDENT_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchChangeStudent() {
    yield takeLatest(CHANGE_STUDENT_REQUEST, changeStudent);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchAddStudent),
        fork(watchChangeStudent),
    ]);
}
