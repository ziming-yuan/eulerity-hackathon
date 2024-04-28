import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { usePets } from '../hooks/PetContext';

const SearchContainer = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding-left: 32px; /* Space for the icon */
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    height: 15px;
    width: 15px;
  }
`;

const SearchBar = () => {
  const { setSearch } = usePets();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <SearchContainer>
      <StyledInput type="text" placeholder="Search" onChange={handleSearchChange}/>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
