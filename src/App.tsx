import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { PetProvider } from './hooks/PetContext';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';

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
      <PetProvider>
        <GlobalStyles />
        <SearchBar />
        <ImageGrid />
      </PetProvider>
    </ThemeProvider>
  );
}

export default App;
