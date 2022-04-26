import React, { useCallback, useState } from "react";
import { Input, Modal, Button } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_STUDENT_REQUEST } from "../reducers/user";
import Router from "next/router";

const FormBox = styled.form``;

function MyModal({ isOpen, setIsOpen, data }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const onOk = () => {
        onSubmitForm();
        setIsOpen(false);
    };
    const onCancel = () => {
        setIsOpen(false);
    };
    const [name, setName] = useState(data.name);
    const [phone, setPhone] = useState(data.phone);
    const [school, setSchool] = useState(data.school);
    const [achieve, setAchieve] = useState(data.achievementRate);
    const [content, setContent] = useState(data.content);

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    }, []);
    const onChangeSchool = useCallback((e) => {
        setSchool(e.target.value);
    });
    const onChangeAchieve = useCallback((e) => {
        setAchieve(e.target.value);
    }, []);
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);
    const onSubmitForm = useCallback(() => {
        console.log("ee");
        dispatch({
            type: CHANGE_STUDENT_REQUEST,
            data: {
                student: {
                    id: data.id,
                    name: name,
                    school: school,
                    achievementRate: achieve,
                    phone: phone,
                    content: content,
                },
            },
        });
    }, [name, school, achieve, phone, content]);
    return (
        <Modal
            title="modal"
            centered
            visible={isOpen}
            onOk={onOk}
            onCancel={onCancel}
        >
            <FormBox onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input
                        name="name"
                        value={name}
                        onChange={onChangeName}
                    ></Input>
                </div>
                <div>
                    <label htmlFor="school">School</label>
                    <Input
                        name="school"
                        value={school}
                        onChange={onChangeSchool}
                    ></Input>
                </div>
                <div>
                    <label htmlFor="phone">Phone-number</label>
                    <Input
                        name="phone"
                        value={phone}
                        onChange={onChangePhone}
                    ></Input>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <Input.TextArea
                        name="content"
                        value={content}
                        rows={4}
                        onChange={onChangeContent}
                    />
                </div>
                <div>
                    <label htmlFor="achieve">AchieveRate</label>
                    <Input
                        name="achieve"
                        value={achieve}
                        onChange={onChangeAchieve}
                    ></Input>
                </div>
            </FormBox>
        </Modal>
    );
}

export default MyModal;
