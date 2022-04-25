import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { STUDENT_REGISTER_REQUEST } from "../reducers/auth";

//학생 이름 나이  등등
function StudentRegisterForm() {
    const { studentRegisterLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const onChangeAge = useCallback((e) => {
        setAge(e.target.value);
    }, []);
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onChangePhoneNumber = useCallback((e) => {
        setPhoneNumber(e.target.value);
    }, []);
    //name: "김형수",
    //       age: 28,
    //     text: "첫 학생 메모 테스트",
    //   phoneNumber: "010-1234-5678",
    const onSubmitForm = useCallback(
        (e) => {
            dispatch({
                type: STUDENT_REGISTER_REQUEST,
                data: {
                    name: name,
                    age: age,
                    text: text,
                    phoneNumber: phoneNumber,
                },
            });
        },
        [dispatch, name, age, text, phoneNumber]
    );
    return (
        <>
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
                    name="studentname"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Student name!",
                        },
                    ]}
                >
                    <Input onChange={onChangeName} placeholder="Student Name" />
                </Form.Item>
                <Form.Item
                    name="studentage"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Student age!",
                        },
                    ]}
                >
                    <Input onChange={onChangeAge} placeholder="Student Age" />
                </Form.Item>
                <Form.Item
                    name="studenttext"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Student text!",
                        },
                    ]}
                >
                    <Input.TextArea
                        onChange={onChangeText}
                        placeholder="Student Text"
                    />
                </Form.Item>
                <Form.Item
                    name="studentphonenumber"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Student Phone Number!",
                        },
                    ]}
                >
                    <Input
                        onChange={onChangePhoneNumber}
                        placeholder="Student Phone Number"
                    />
                </Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={studentRegisterLoading}
                >
                    로그인
                </Button>
            </Form>
        </>
    );
}

export default StudentRegisterForm;
