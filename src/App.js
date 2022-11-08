import React, { useState, useEffect } from "react";

import styled from "styled-components";

// ==> Components
import Table from "./components/Table";

// ==> Actions
import { getPackages } from "./store/actions/packagesAction";

const App = () => {
  //* ==> STATES <== *//
  const [loading, setLoading] = useState(false);

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
        <Table columns={columns} data={packages} loading={loading} />
      </div>
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
    }
  }

  .containBody {
    margin: 0 20px 0 20px;
  }
`;

export default App;
