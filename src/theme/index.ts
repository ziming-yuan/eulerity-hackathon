import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Raleway", sans-serif;
  }
  button, input, select {
    font-family: inherit;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    padding: 8px;
    font-size: 16px;
    margin: 5px;
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    &:active, &:focus {
      outline-style: auto;
      outline-color: ${(props) => props.theme.colors.primary};
      outline-width: 2px;
    }
    /* Small screens */
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
  svg {
    vertical-align: middle;
    width: 16px;
    height: 16px;
    @media (max-width: 576px) {
      width: 14px;
      height: 14px;
    }
  }
`;

const theme = {
  borderRadius: "4px",
  colors: {
    primary: "#04a17e",
    secondary: "#d9d9d9",
    darker: "#007E82",
  },
};

export { GlobalStyles, theme };
