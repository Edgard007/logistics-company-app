import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "antd/dist/antd.min.css";
import { ThemeProvider } from "styled-components";

// ==> Config
import { Wrapper, themes } from "./config/global-style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <Wrapper>
        <App />
      </Wrapper>
    </ThemeProvider>
  </React.StrictMode>
);
