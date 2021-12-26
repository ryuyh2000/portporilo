import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    background-color:#202327;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
