import React from "react";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";

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
    return (
        <AppLayout>
            {mainPosts.map((v) => (
                <PostCard></PostCard>
            ))}
        </AppLayout>
    );
}

export default index;
