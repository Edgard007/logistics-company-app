import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "antd/dist/antd.min.css";
import { ThemeProvider } from "styled-components";

// ==> Config
import { GlobalStyle, themes } from "./config/global-style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>
);
