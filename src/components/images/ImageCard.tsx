import React from "react";
import styled, { keyframes } from "styled-components";
import { Pet } from "../../types/pet";
import { usePets } from "../../hooks/PetContext";

interface ImageCardProps {
  pet: Pet;
}

const fadeIn = keyframes`
  from {
    scale: 0.8;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  };
`;

const Card = styled.div<{ $isSelected: boolean }>`
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.borderRadius};
  outline: ${({ $isSelected, theme }) =>
    $isSelected && `2px solid ${theme.colors.primary}`};
  border: "1px solid #d9d9d9";
  transition: transform 0.2s ease-out; /* When hovering over the card, scale it */
  animation: ${fadeIn} ease-in;
  animation-timeline: view();
  animation-range-start: cover;
  animation-range-end: 200px;
  &:hover {
    transform: scale(1.05);
  }
  /* Small screens */
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover; /* Scale the image to cover the entire area, maintaining the ratio */
  border-radius: ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius} 0 0;
  /* Small screens */
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Info = styled.div`
  padding: 10px;
  background: white;
  text-align: center;
  border-radius: 0 0 ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius};
`;

// Overlay of pet description appears when hovering over the image
const DescriptionOverlay = styled.div`
  border-radius: ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius} 0 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

// Helper div to position the overlay
const PositionRelative = styled.div`
  position: relative;
  height: 300px;
  /* Small screens */
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ImageCard = ({ pet }: ImageCardProps) => {
  const { toggleSelection, selectedPets } = usePets();
  const isSelected = selectedPets.has(pet.id);

  return (
    <Card $isSelected={isSelected} onClick={() => toggleSelection(pet.id)}>
      <PositionRelative>
        <Image src={pet.url} alt={pet.title} />
        <DescriptionOverlay>{pet.description}</DescriptionOverlay>
      </PositionRelative>
      <Info>
        <h3>{pet.title}</h3>
        <p>{new Date(pet.created).toDateString()}</p>
      </Info>
    </Card>
  );
};

export default ImageCard;
