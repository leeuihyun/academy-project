import React, { useState, useCallback, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_STUDENT_REQUEST } from "../reducers/user";
import Router from "next/router";

const Box = styled.form`
    border-radius: 10px;
    width: 100%;
    height: 360px;
    box-shadow: 0px 0px 3px #053946;
    padding: 20px;
    margin-top: 20px;
    margin-right: 20px;
    button {
        background-color: white;
        width: 50px;
        margin-top: 10px;
        float: right;
    }
`;
function studentregister() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [school, setSchool] = useState("");
    const [achieve, setAchieve] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    }, []);
    const onChangeSchool = useCallback((e) => {
        setSchool(e.target.value);
    }, []);
    const onChangeAchieve = useCallback((e) => {
        setAchieve(e.target.value);
    }, []);
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);
    useEffect(() => {
        if (!user) {
            Router.push("/");
        }
    }, [user]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch({
                type: ADD_STUDENT_REQUEST,
                data: {
                    student: {
                        name: name,
                        phone: phone,
                        school: school,
                        content: content,
                        achievementRate: achieve,
                    },
                },
            });
        },
        [name, phone, school, content, achieve]
    );
    return (
        <AppLayout>
            <Box onSubmit={onSubmit}>
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
                    <Input
                        name="content"
                        value={content}
                        onChange={onChangeContent}
                    ></Input>
                </div>
                <div>
                    <label htmlFor="achieve">Achieve</label>
                    <Input
                        name="achieve"
                        type="number"
                        value={achieve}
                        onChange={onChangeAchieve}
                    ></Input>
                </div>
                <button type="submit">등록</button>
            </Box>
        </AppLayout>
    );
}

export default studentregister;
