import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MyModal from "./MyModal";

const Box = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 3px #053946;
    padding: 10px;
    .name_area {
        font-weight: bold;
    }
    .infor {
    }

    margin-top: 20px;
`;

function PostCard({ data }) {
    const [isOpen, setIsOpen] = useState(false);

    const onClickBox = () => {
        setIsOpen(true);
        console.log(data);
    };
    return (
        <>
            <Box onClick={onClickBox}>
                <div className="name_area">{data.name}</div>
                <div className="infor">{data.school}</div>
            </Box>
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        </>
    );
}

export default PostCard;
