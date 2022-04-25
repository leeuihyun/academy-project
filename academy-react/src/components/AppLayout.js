import { Link } from "react-router-dom";
import { Menu, Col, Row, Button } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logOutRequest } from "../reducers/auth";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const WhiteBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .logo-area {
        //display: block;
        text-align: center;
        font-weight: bold;
        letter-spacing: 4px;
        font-size: 30px;
    }
    .logout-button-wrapper {
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: right;
        align-items: center;
        color: white;
        padding: 1rem;
    }
    padding: 1rem;
    background: #131629;
    border-radius: 2px;
`;

const AppLayout = ({ children, history }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const onClick = () => {
        if (user) {
            dispatch(logOutRequest());
            console.log("logout-success");
        } else {
            console.log("err");
        }
    };

    useEffect(() => {
        if (!user) {
            history.push("/login");
        }
    });
    return (
        <div>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">ACADEMY</Link>
                </div>
                <div className="logout-button-wrapper">
                    <Button onClick={onClick} type="primary">
                        로그아웃
                    </Button>
                </div>
            </WhiteBox>
            <div>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item key="home">
                        <Link to="/">홈</Link>
                    </Menu.Item>
                    <Menu.Item key="studentregister">
                        <Link to="/studentRegister">학생등록</Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Link to="/profile">프로필</Link>
                    </Menu.Item>
                </Menu>
                <Row gutter={8}>
                    <Col xs={24} md={6}>
                        왼쪽메뉴
                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        오른쪽메뉴
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default withRouter(AppLayout);
