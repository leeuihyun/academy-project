import React, { useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInRequest } from "../reducers/auth";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const LogInFormBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .auth-box {
        width: 500px;
        background-color: white;
        border: 2px solid black;
        color: black;
        padding: 2rem;
        .footer {
            margin-top: 2rem;
            text-align: right;
            a {
                cursor: pointer;
                color: gray;
                text-decoration: underline;
            }
            &:hover {
                color: black;
            }
        }
    }
`;

function LogInForm({ history }) {
    const dispatch = useDispatch();
    const { isLoggingIn } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(logInRequest({ id, password }));
    }, [dispatch, id, password]);

    useEffect(() => {
        if (user) {
            history.push("/");
        }
    });
    return (
        <LogInFormBlock>
            <div>ACADEMY</div>
            <div className="auth-box">
                <Form
                    autoComplete="off"
                    onFinish={onSubmitForm}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input onChange={onChangeId} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password onChange={onChangePassword} />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Please Check</Checkbox>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoggingIn}
                        >
                            로그인
                        </Button>
                    </Form.Item>
                </Form>
                <div className="footer">
                    <Link to="/register">회원가입</Link>
                </div>
            </div>
        </LogInFormBlock>
    );
}

export default withRouter(LogInForm);
