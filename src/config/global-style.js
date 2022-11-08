import styled from "styled-components";

// ==> Global colours variable
const themes = {
  primary: "#FFFFFF",
  secundary: "#F7F8F8",
  blue: "#0052ff",
  secBlue: "#3C5CA1",
  gray: "#DDDDDD",
  secGray: "#898989",
  green: "#6EA03A",
};

// ==> Global styles
const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }
`;

export { themes, Wrapper };
