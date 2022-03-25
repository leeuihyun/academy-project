import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const taskMap = {
    login: "login",
    register: "register",
};

const AuthFormBlock = styled.div`
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

function AuthForm({ type }) {
    const text = taskMap[type];
    const onSubmitForm = () => {
        console.log("clear");
    };

    return (
        <AuthFormBlock>
            <div>ACADEMY</div>
            <div>{text}</div>
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
                        <Input />
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
                        <Input.Password />
                    </Form.Item>
                    {type === "register" && (
                        <Form.Item
                            label="PasswordCheck"
                            name="passwordCheck"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please input your Password Check!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    )}
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
                        <Button type="primary" htmlType="submit">
                            {text}
                        </Button>
                    </Form.Item>
                </Form>
                <div className="footer">
                    {type === "login" ? (
                        <Link to="/register">회원가입</Link>
                    ) : (
                        <Link to="/login">로그인</Link>
                    )}
                </div>
            </div>
        </AuthFormBlock>
    );
}

export default AuthForm;
