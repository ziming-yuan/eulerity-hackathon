import SearchBar from "./SearchBar";
import SelectionControls from "./SelectionControls";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* Adjust the styling as necessary */
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <SearchBar />
      <SelectionControls />
    </TopBarContainer>
  );
};

export default TopBar;
