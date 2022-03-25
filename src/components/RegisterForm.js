import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterFormBlock = styled.div`
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

function RegisterForm() {
    const onSubmitForm = () => {
        console.log("clear");
    };

    return (
        <RegisterFormBlock>
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
                    <Form.Item
                        label="PasswordCheck"
                        name="passwordCheck"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password Check!",
                            },
                        ]}
                    >
                        <Input.Password />
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
                        <Button type="primary" htmlType="submit">
                            회원가입
                        </Button>
                    </Form.Item>
                </Form>
                <div className="footer">
                    <Link to="/login">로그인</Link>
                </div>
            </div>
        </RegisterFormBlock>
    );
}

export default RegisterForm;
