import React from "react";
import { usePets } from "../../hooks/PetContext";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const StyledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 30px 20px;
  width: calc(100% - 80px);
  max-width: 1350px;
  margin: 20px auto;
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
  padding: 0;
  font-size: 16px;
  margin: 40px;
  margin-bottom: 60px;
`;
const ImageGrid = () => {
  const { pets, loading, error } = usePets();

  if (loading) return <StyledParagraph>Loading...</StyledParagraph>;
  if (error)
    return (
      <StyledParagraph>Error loading images: {String(error)}</StyledParagraph>
    );

  if (pets.length === 0)
    return (
      <StyledParagraph>No pets found. Try another search term.</StyledParagraph>
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
