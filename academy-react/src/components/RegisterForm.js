import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { REGISTER_REQUEST, REGISTER_SUCCESS } from "../reducers/auth";
import { useCallback } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

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

function RegisterForm({ history }) {
    const { registerLoading, registerDone, registerError } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const onChangeUsername = useCallback((e) => {
        setUsername(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password]
    );

    const onSubmitForm = useCallback(() => {
        console.log("clear");

        if (passwordCheck !== password) {
            return setPasswordError(true);
        }
        dispatch({
            type: REGISTER_REQUEST,
            data: { username, password },
        });
    }, [username, password, passwordCheck, dispatch]);

    useEffect(() => {
        if (registerError) {
            alert(registerError);
        }
    });
    useEffect(() => {
        if (registerDone) {
            history.push("/login");
        }
    });
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
                    <div>
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
                            <Input onChange={onChangeUsername} />
                        </Form.Item>
                    </div>
                    <div>
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
                    </div>

                    <div>
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
                            <Input.Password onChange={onChangePasswordCheck} />
                        </Form.Item>
                        {passwordCheck !== password ? (
                            <div style={{ color: "red" }}>
                                비밀번호가 일치하지 않습니다.
                            </div>
                        ) : (
                            <div style={{ color: "green" }}>
                                비밀번호가 일치합니다.
                            </div>
                        )}
                    </div>

                    <div>
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
                    </div>

                    <div>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={registerLoading}
                            >
                                회원가입
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
                <div className="footer">
                    <Link to="/login">로그인</Link>
                </div>
            </div>
        </RegisterFormBlock>
    );
}

export default withRouter(RegisterForm);
