import React from "react";
import { usePets } from "../hooks/PetContext";
import styled from "styled-components";

const ControlContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: white;
`;

const SelectionControls = () => {
  const { selectAll, clearSelection, downloadSelected } = usePets();

  return (
    <ControlContainer>
      <Button onClick={selectAll}>Select All</Button>
      <Button onClick={clearSelection}>Clear Selection</Button>
      <Button onClick={downloadSelected}>Download </Button>
    </ControlContainer>
  );
};

export default SelectionControls;
