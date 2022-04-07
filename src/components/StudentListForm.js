import React from "react";
import { Table, Space, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const columns = [
    {
        title: "이름",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "나이",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "핸드폰",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
    },
    {
        title: "액션",
        key: "action",
        align: "right",
        render: (text, record) => (
            <Space size="middle">
                <Button
                    onClick={(e) => {
                        console.log(record.studentId);
                    }}
                >
                    <Link to={`/studentchange/${record.studentId}`}>수정</Link>
                </Button>
                <Button onClick={() => console.log("delete button click")}>
                    삭제
                </Button>
            </Space>
        ),
    },
];

function StudentListForm({ history }) {
    const { studentList } = useSelector((state) => state.auth.user);
    return (
        <Table columns={columns} dataSource={studentList} rowKey="name"></Table>
    );
}

export default withRouter(StudentListForm);
