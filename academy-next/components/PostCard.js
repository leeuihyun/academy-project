import React, { useCallback } from "react";
import styled from "styled-components";

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
    const onClickBox = useCallback(() => {
        console.log("onClick");
    });
    return (
        <>
            <Box onClick={onClickBox}>
                <div className="name_area">{data.name}</div>
                <div className="infor">{data.school}</div>
            </Box>
        </>
    );
}

export default PostCard;
