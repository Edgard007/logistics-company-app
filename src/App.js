import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Modal as ModalANTD } from "antd";

// ==> Components
import Table from "./components/Table";
import Modal from "./components/Modal";

// ==> Actions
import { getPackages, editPackages } from "./store/actions/packagesAction";

// ==> Pages
import AddPackages from "./pages/AddPackages";
import PackagesSent from "./pages/PackagesSent";

// ==> Helper
import { alertNotification } from "./helpers/notifications";

const { useModal } = ModalANTD;

const App = () => {
  const [modal, contextHolder] = useModal();

  //* ==> STATES <== *//
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // ==> For the storage of arrays
  const [packages, setPackages] = useState([]);
  const [sent, setSent] = useState([]); // ==> Packages sent

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      with: 300,
    },
    {
      title: "Status",
      dataIndex: "statusName",
      align: "center",
      with: 300,
    },
    {
      title: "Actions",
      dataIndex: "status",
      align: "center",
      with: 100,
      render: (text, record) =>
        text === "I" && (
          <img
            src="./icons/sendIcon.png"
            className="sendIcon"
            alt=""
            onClick={() => changeStatus(record)}
          />
        ),
    },
  ];

  const get = async () => {
    setLoading(true); // ==> Show loading
    try {
      const packags = await getPackages();
      setPackages(packags || []);

      // ==> Get sent packets
      const filter = (packags || []).filter((el) => el?.status === "E");
      setSent(filter || []);
    } catch (e) {
      console.error("||* ==> Error getPackages <== *||", e);
    }
    setLoading(false); // ==> Hide loading
  };

  const change = async (record) => {
    setLoading(true); // ==> Show loading
    try {
      const body = {
        ...record,
        status: "E",
        statusName: "Sent",
      };
      const ok = await editPackages(body);
      if (ok) {
        get();
        alertNotification(
          "Success",
          "Information entered correctly",
          "success"
        );
      }
    } catch (e) {
      console.error("||* ==> Error editPackages <== *||", e);
    }
    setLoading(false); // ==> Hide loading
  };

  const changeStatus = (record) => {
    modal.confirm({
      title: "Would you like to send this package?",
      onOk: () => change(record),
    });
  };

  useEffect(() => {
    console.clear();
    get();
  }, []);

  return (
    <Wrapper>
      {contextHolder}
      <div className="title">
        <h1> {!showMap ? "List of packages" : "Route to deliver"} </h1>
      </div>
      <div className="containBody">
        {!showMap ? (
          <>
            <div className="header">
              <button
                type="button"
                className="btn-Secundary"
                style={{ marginRight: "20px" }}
                onClick={() => setShowMap(true)}
              >
                Route to deliver
              </button>
              <button
                type="button"
                className="btn-Secundary"
                onClick={() => setShowModal(true)}
              >
                New
              </button>
            </div>
            <Table columns={columns} data={packages} loading={loading} />
          </>
        ) : (
          <PackagesSent packages={sent} onClose={() => setShowMap(false)} />
        )}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} width={1000}>
        <AddPackages
          packages={packages}
          onClose={() => setShowModal(false)}
          onOk={() => {
            setShowModal(false); // ==> Hide modal
            get();
            alertNotification(
              "Success",
              "Information entered correctly",
              "success"
            );
          }}
        />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px 0;

    h1 {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
    }
  }

  .containBody {
    margin: 0 20px 0 20px;

    .header {
      display: flex;
      justify-content: end;
      align-items: center;
      margin: 10px;
    }
  }

  .sendIcon {
    width: 30px;
    height: 30px;
    transform: rotate(-25deg);
    cursor: pointer;
  }
`;

export default App;
