import React from "react";

import styled from "styled-components";

// ==> Components
import Table from "./components/Table";

const App = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      with: 300,
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      with: 300,
    },
  ];

  return (
    <Wrapper>
      <div className="title">
        <h1>Logistics company</h1>
      </div>
      <div className="containBody">
        <Table columns={columns} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
