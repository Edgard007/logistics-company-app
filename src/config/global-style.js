import { createGlobalStyle } from "styled-components";

// ==> Global colours variable
const themes = {
  primary: "#FFFFFF",
  secundary: "#F7F8F8",
  blue: "#3C5CA1",
  secBlue: "#3C5CA1",
  gray: "#DDDDDD",
  secGray: "#898989",
  black: "#232323",
};

// ==> Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }

  /* Custom buttons */
  .btn-Secundary {
    background: ${(props) => props?.theme?.gray} !important;
    color: ${(props) => props?.theme?.secGray} !important;
    padding: 5px 25px !important;
    border: 2px solid !important;
    border-color: ${(props) => props?.theme?.secGray} !important;
    border-radius: 15px;
    font-weight: 400;
    cursor: pointer;
    outline: 0;
  }

  .btn-Secundary:hover {
    background: ${(props) => props?.theme?.secGray} !important;
    color: ${(props) => props?.theme?.primary} !important;
    font-weight: 400;
  }


  .ant-btn-primary {
    background: ${(props) => props?.theme?.blue} !important;
    color: ${(props) => props?.theme?.primary} !important;
    border: 1px solid !important;
    border-color: ${(props) => props?.theme?.primary} !important;
    border-radius: 15px;
    padding: 5px 25px !important;
  }

  .ant-btn-primary:hover {
    border: 1px solid !important;
    border-color: ${(props) => props?.theme?.gray} !important;
  }

  .ant-btn-default {
    background: ${(props) => props?.theme?.gray} !important;
    color: ${(props) => props?.theme?.secGray} !important;
    border: 1px solid !important;
    border-color: ${(props) => props?.theme?.secGray} !important;
    border-radius: 15px;
    padding: 5px 25px !important;
  }

  .ant-btn-default:hover {
    background: ${(props) => props?.theme?.secGray} !important;
    color: ${(props) => props?.theme?.primary} !important;
  }


  /* Custom modals */
  .ant-modal-content {
    border-radius: 15px !important;
    box-shadow: 0 0 20px 0${(props) => props?.theme?.black} !important;
  }

  .ant-modal-close {
    border-radius: 15px !important;
    background:${(props) => props?.theme?.primary} !important;
    background-color:${(props) => props?.theme?.primary} !important;
    color:${(props) => props?.theme?.secBlue} !important;
    border: none !important;
    padding: 0 !important;
  }

  .ant-modal-close:hover {
    color:${(props) => props?.theme?.primary} !important;
  }

  .ant-modal-close {
    position: absolute !important;
    right: -30px !important;
    top: -15px !important;
    box-shadow: 0 0 20px 0${(props) => props?.theme?.black} !important;
  }

  .ant-modal-close:hover {
    background:${(props) => props?.theme?.secGray} !important;
  }

  .ant-modal-close-x {
    width: 28px !important;
    height: 28px !important;
  }

  .ant-modal-close-x > .anticon {
    vertical-align: 0.7em !important;
  }

  @media (max-width: 700px) {
    .ant-modal-close {
      position: absolute !important;
      right: 10px !important;
      top: 10px !important;
    }
  }  
`;

export { themes, GlobalStyle };
