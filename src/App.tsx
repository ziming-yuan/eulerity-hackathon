import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import SearchBar from './components/SearchBar';

const GlobalStyles = createGlobalStyle`
  button, input, select {
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    padding: 8px;
  }
  input:focus {
    outline-color: #4096ff;
    outline-width: 2px;
  }
`;

function App() {
  return (
    <ThemeProvider theme = {{}}>
      <GlobalStyles />
      <SearchBar />
    </ThemeProvider>
  );
}

export default App;
