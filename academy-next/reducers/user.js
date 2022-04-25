import { handleActions } from "redux-actions";
import produce from "immer";
import shortId from "shortid";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

const initialState = {
    user: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
};

const dummyUser = (data) => ({
    email: data.user.email,
    studentList: [
        {
            id: shortId.generate(),
            name: "firstStudent",
            content: "first student",
        },
        {
            id: shortId.generate(),
            name: "secondStudent",
            content: "second student",
        },
    ],
});

const user = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.loadInError = null;
            }),
        [LOG_IN_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.user = dummyUser(action.data);
                draft.logInLoading = false;
                draft.logInDone = true;
            }),
        [LOG_IN_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = false;
                draft.logInError = action.data.error;
            }),
    },
    initialState
);

export default user;
