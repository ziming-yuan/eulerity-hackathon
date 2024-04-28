import React from "react";
import { usePets } from "../../hooks/PetContext";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const StyledImageGrid = styled.div`
  display: grid;
  margin: 20px 40px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 20px;
  &::after {
    content: "";
    width: 300px;
    height: 0;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    &::after {
      width: 200px;
    }
  }
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
