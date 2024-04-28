import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { PetProvider } from "./hooks/PetContext";
import TopBar from "./components/TopBar";
import ImageGrid from "./components/ImageGrid";

const GlobalStyles = createGlobalStyle`
  button, input, select {
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    padding: 8px;
    font-size: 16px;
    margin: 5px;
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    &:active, &:focus {
      outline-style: solid;
      outline-color: ${(props) => props.theme.colors.primary};
      outline-width: 2px;
    }
    /* Small screens */
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`;

const theme = {
  borderRadius: "4px",
  colors: {
    primary: "#04a17e",
    secondary: "#d9d9d9",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PetProvider>
        <GlobalStyles />
        <TopBar />
        <ImageGrid />
      </PetProvider>
    </ThemeProvider>
  );
}

export default App;
