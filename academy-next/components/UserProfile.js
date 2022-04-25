import React, { useCallback, useEffect } from "react";
import { Card, Avatar, Button } from "antd";
import Link from "next/link";

function UserProfile() {
    const onClickLogOut = useCallback((e) => {
        //logout
    }, []);
    return (
        <Card
            style={{ margin: "5px" }}
            actions={[
                <div key="twit">
                    <Link href="/">
                        <a>학생</a>
                    </Link>
                    <br />0
                </div>,
                <div key="following">
                    <Link href="/">
                        <a>학생</a>
                    </Link>
                    <br />0
                </div>,
                <div key="follower">
                    <Link href="/">
                        <a>학생</a>
                    </Link>
                    <br />0
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>Vanc</Avatar>} title="Vanc" />
            <Button onClick={onClickLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;
