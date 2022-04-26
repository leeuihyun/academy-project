import { takeLatest, fork, all } from "redux-saga/effects";
import userSaga from "./user";

export default function* rootSaga() {
    yield all([fork(userSaga)]);
}