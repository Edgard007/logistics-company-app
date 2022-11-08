import React from "react";

import { Modal } from "antd";

/**
 * Custom modal component
 * @property {boolean} show Modal Control Flag (Mostar/Hide)
 * @property {fuction} onClose Function to be executed when closing modal
 * @property {<></>} children Wrapper
 */
const CustomModal = ({ show, onClose, children }) => {
  return (
    <>
      <Modal
        title={false}
        visible={show}
        onCancel={onClose}
        footer={null}
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
        destroyOnClose={true}
        width={800}
      >
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
