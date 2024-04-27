import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

const SearchContainer = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  padding-right: 30px; /* Make room for the icon */
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  outline: none;
  &:focus {
    border-color: #4096ff;
    border-width: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    height: 15px;
    width: 15px;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <StyledInput type="text" placeholder="Search" />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
