import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; //선생님 로그인 하는 페이지, 로그인 되면 학생 목록 나오는 페이지로 넘어가기.
import Profile from "./pages/Profile"; //선생님 프로필 페이지
import RegisterPage from "./pages/RegisterPage"; //선생님회원가입 페이지
import StudentListPage from "./pages/StudentListPage"; //학생 목록 페이지
import StudentRegisterPage from "./pages/StudentRegisterPage"; // 학생 등록 페이지
import StudentToDoPage from "./pages/StudentToDoPage"; //학생 목록에서 클릭시 학생 무엇을 해야되는지
import TeacherTime from "./pages/TeacherTime"; //시간표 페이지
import "antd/dist/antd.min.css";

function App() {
    return (
        <>
            <Route
                path={["/@:username", "/"]}
                component={StudentListPage}
                exact
            ></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/register" component={RegisterPage}></Route>
            <Route
                path="/studentregister"
                component={StudentRegisterPage}
            ></Route>
            <Route
                path="/@:username/:studentId"
                component={StudentToDoPage}
            ></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/time" component={TeacherTime}></Route>
        </>
    );
}

export default App;
