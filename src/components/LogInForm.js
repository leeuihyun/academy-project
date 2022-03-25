import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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

function LogInForm() {
    const onSubmitForm = () => {
        console.log("clear");
    };

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

export default LogInForm;
