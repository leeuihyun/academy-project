import React from "react";
import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";

function StudentRegisterPage() {
    const { user } = useSelector((state) => state.auth);
    return <AppLayout>{user.nickname}</AppLayout>;
}

export default StudentRegisterPage;
