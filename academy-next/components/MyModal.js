import React from "react";
import { Modal, Button } from "antd";

function MyModal({ isOpen, setIsOpen }) {
    const onOk = () => {
        setIsOpen(false);
    };
    const onCancel = () => {
        setIsOpen(false);
    };
    const onClickModal = (e) => {
        console.log(e.taget.title);
    };
    return (
        <>
            <Modal
                onClick={onClickModal}
                title="modal"
                centered
                visible={isOpen}
                onOk={onOk}
                onCancel={onCancel}
            >
                <p>some contents</p>
                <p>some contents</p>
            </Modal>
        </>
    );
}

export default MyModal;
