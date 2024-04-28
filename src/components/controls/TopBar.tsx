import SearchBar from "./SearchBar";
import SelectionControls from "./SelectionControls";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
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
