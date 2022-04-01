import React from "react";
import { Table, Space, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "PhoneNumber",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
    },
    {
        title: "Action",
        key: "action",
        align: "right",
        render: (text, record) => (
            <Space size="middle">
                <Button
                    onClick={() => {
                        console.log("edit button click");
                    }}
                >
                    <Link to="/studentregister">Edit</Link>
                </Button>
                <Button onClick={() => console.log("delete button click")}>
                    Delete
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
