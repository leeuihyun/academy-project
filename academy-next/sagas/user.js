import axios from "axios";
import { takeLatest, all, call, fork, put, delay } from "redux-saga/effects";
import {
    LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    LOG_IN_REQUEST,
} from "../../academy-react/src/reducers/auth";

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
export default function* userSaga() {
    yield all([fork(watchLogIn)]);
}
