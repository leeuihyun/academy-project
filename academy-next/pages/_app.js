import React from "react";
import "antd/dist/antd.min.css";
import wrapper from "../store/configureStore";

function _app({ Component }) {
    return <Component />;
}

export default wrapper.withRedux(_app);
