import React from "react";
import { usePets } from "../../hooks/PetContext";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const StyledImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  padding: 40px;
  font-size: 20px;
`;
const ImageGrid = () => {
  const { pets, loading, error } = usePets();

  if (loading) return <StyledParagraph>Loading...</StyledParagraph>;
  if (error)
    return (
      <StyledParagraph>Error loading images: {String(error)}</StyledParagraph>
    );

  return (
    <StyledImageGrid>
      {pets.map((pet) => (
        <ImageCard key={pet.id} pet={pet} />
      ))}
    </StyledImageGrid>
  );
};

export default ImageGrid;
