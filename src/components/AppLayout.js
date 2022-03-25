import { Link } from "react-router-dom";
import { Menu, Col, Row } from "antd";
import styled from "styled-components";

const WhiteBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .logo-area {
        display: block;
        padding-bottom: 1rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
        color: white;
    }
    padding: 1rem;
    background: #131629;
    border-radius: 2px;
`;
const AppLayout = ({ children }) => {
    return (
        <div>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">ACADEMY</Link>
                </div>
            </WhiteBox>
            <div>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item>
                        <Link to="/">홈</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/studentRegister">학생등록</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/profile">프로필</Link>
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

export default AppLayout;
