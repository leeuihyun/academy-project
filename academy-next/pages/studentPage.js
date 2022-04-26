import React from "react";

const studentPage = (props) => {
    const studentId = props.match.params;
    return (
        <>
            <div>{studentId}</div>
        </>
    );
};

export default studentPage;
