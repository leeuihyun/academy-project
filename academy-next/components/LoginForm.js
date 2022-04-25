import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "../../academy-react/src/reducers/auth";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onFinishForm = () => {
        if (email && password) {
            dispatch({
                type: LOG_IN_REQUEST,
                data: {
                    user: {
                        email: email,
                    },
                },
            });
        }
    };
    return (
        <Form onFinish={onFinishForm} style={{ padding: "10px" }}>
            <div>
                <label htmlFor="email">email</label>
                <Input
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                ></Input>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <Input
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                ></Input>
            </div>
            <div style={{ marginTop: "10px" }}>
                <Button htmlType="submit" type="primary">
                    로그인
                </Button>
                <Link href="/signup">
                    <a>회원가입</a>
                </Link>
            </div>
        </Form>
    );
}

export default LoginForm;
