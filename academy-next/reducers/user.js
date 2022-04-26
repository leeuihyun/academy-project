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

export const ADD_STUDENT_REQUEST = "ADD_STUDENT_REQUEST";
export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";
export const ADD_STUDENT_FAILURE = "ADD_STUDENT_FAILURE";

export const CHANGE_STUDENT_REQUEST = "CHANGE_STUDENT_REQUEST";
export const CHANGE_STUDENT_SUCCESS = "CHANGE_STUDENT_SUCCESS";
export const CHANGE_STUDENT_FAILURE = "CHANGE_STUDENT_FAILURE";

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
    addStudentLoading: false,
    addStudentDone: false,
    addStudentError: null,
    changeStudentLoading: false,
    changeStudentDone: false,
    changeStudentError: null,
};

const dummyUser = (data) => ({
    email: data.user.email,
    studentList: [
        {
            id: shortId.generate(),
            name: "firstStudent",
            content: "first student",
            phone: "010-9381-4024",
            achievementRate: "70",
            school: "신원고등학교",
        },
        {
            id: shortId.generate(),
            name: "secondStudent",
            content: "second student",
            phone: "010-8793-4024",
            achievementRate: "80",
            school: "대신고등학교",
        },
    ],
});

const dummyStudent = (data) => ({
    id: shortId.generate(),
    name: data.student.name,
    content: data.student.content,
    phone: data.student.phone,
    achievementRate: data.student.achievementRate,
    school: data.student.school,
});

const user = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
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
        [LOG_OUT_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
            }),
        [LOG_OUT_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.user = null;
                draft.logOutLoading = false;
                draft.logOutDone = true;
            }),
        [LOG_OUT_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.logOutLoading = false;
                draft.logOutError = action.data.error;
            }),
        [SIGN_UP_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
            }),
        [SIGN_UP_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                //server가 있어야함
                draft.signUpLoading = false;
                draft.signUpDone = true;
            }),
        [SIGN_UP_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.signUpLoading = false;
                draft.signUpError = action.data.error;
            }),
        [ADD_STUDENT_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.addStudentLoading = true;
                draft.addStudentDone = false;
                draft.addStudentError = null;
            }),
        [ADD_STUDENT_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.user.studentList.push(dummyStudent(action.data));
                draft.addStudentLoading = false;
                draft.addStudentDone = true;
            }),
        [ADD_STUDENT_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.addStudentLoading = true;
                draft.addStudentError = action.data.error;
            }),
        [CHANGE_STUDENT_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.changeStudentLoading = true;
                draft.changeStudentDone = false;
                draft.changeStudentError = null;
            }),
        [CHANGE_STUDENT_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                const student = draft.user.studentList.find(
                    (v) => v.id === action.data.id
                );
                student = {
                    ...id,
                    name: action.data.student.name,
                    content: action.data.student.content,
                    phone: action.data.student.phone,
                    achievementRate: action.data.student.achievementRate,
                    school: action.data.student.school,
                };
                draft.changeStudentLoading = false;
                draft.changeStudentDone = true;
            }),
        [CHANGE_STUDENT_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.changeStudentLoading = false;
                draft.changeStudentError = action.data.error;
            }),
    },
    initialState
);

export default user;
