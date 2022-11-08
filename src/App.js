import React, { useState, useEffect } from "react";

import styled from "styled-components";

// ==> Components
import Table from "./components/Table";
import Modal from "./components/Modal";

// ==> Actions
import { getPackages } from "./store/actions/packagesAction";

// ==> Pages
import AddPackages from "./pages/AddPackages";

const App = () => {
  //* ==> STATES <== *//
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // ==> For the storage of arrays
  const [packages, setPackages] = useState([]);

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
  ];

  const get = async () => {
    setLoading(true); // ==> Show loading
    try {
      const packags = await getPackages();
      setPackages(packags || []);
    } catch (e) {
      console.error("||* ==> Error getPackages <== *||", e);
    }
    setLoading(false); // ==> Hide loading
  };

  useEffect(() => {
    console.clear();
    get();
  }, []);

  return (
    <Wrapper>
      <div className="title">
        <h1>Logistics company</h1>
      </div>
      <div className="containBody">
        <div className="header">
          <button
            type="button"
            className="btn-Secundary"
            onClick={() => setShowModal(true)}
          >
            New
          </button>
        </div>
        <Table columns={columns} data={packages} loading={loading} />
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} width={1000}>
        <AddPackages
          packages={packages}
          onClose={() => setShowModal(false)}
          onOk={() => {
            setShowModal(false); // ==> Hide modal
            get();
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
`;

export default App;
