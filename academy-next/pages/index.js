import React from "react";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

const mainPosts = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 3,
    },
    {
        id: 3,
    },
    {
        id: 3,
    },
    {
        id: 3,
    },
    {
        id: 3,
    },
    {
        id: 3,
    },
    {
        id: 3,
    },
];
function index() {
    const { user } = useSelector((state) => state.user);

    return (
        <AppLayout>
            {user &&
                user.studentList.map((v) => (
                    <PostCard data={v} key={v}></PostCard>
                ))}
        </AppLayout>
    );
}

export default index;
