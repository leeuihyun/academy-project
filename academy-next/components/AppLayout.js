import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import img from "../img/logo.png";
import { Menu, Col, Row, Input } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function AppLayout({ children }) {
    const { user } = useSelector((state) => state.user);
    return (
        <>
            <ImageBox>
                <Link href="/">
                    <a>
                        <img
                            src={img}
                            alt="academyIcon"
                            width="260"
                            height="200"
                        />
                    </a>
                </Link>
            </ImageBox>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>홈</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/studentregister">
                        <a>학생등록</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search
                        enterButton
                        style={{ verticalAlign: "middle" }}
                    ></Input.Search>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    left
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {user ? <UserProfile /> : <LoginForm />}
                </Col>
            </Row>
        </>
    );
}

export default AppLayout;
