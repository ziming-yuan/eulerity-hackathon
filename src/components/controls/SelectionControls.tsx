import React from "react";
import { usePets } from "../../hooks/PetContext";
import { ReactComponent as A2Z } from "../../icons/a2z.svg";
import { ReactComponent as Z2A } from "../../icons/z2a.svg";
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
  const { selectAll, clearSelection, downloadSelected, sortPets } = usePets();

  return (
    <ControlContainer>
      <Button onClick={() => sortPets("asc")}>
        <A2Z />
      </Button>
      <Button onClick={() => sortPets("desc")}>
        <Z2A />
      </Button>
      <Button onClick={selectAll}>Select All</Button>
      <Button onClick={clearSelection}>Clear Selection</Button>
      <Button onClick={downloadSelected}>Download </Button>
    </ControlContainer>
  );
};

export default SelectionControls;
