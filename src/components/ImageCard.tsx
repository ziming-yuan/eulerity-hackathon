import React from 'react';
import styled from 'styled-components';
import { Pet } from '../types/pet';

interface ImageCardProps {
    pet: Pet;
}

const Card = styled.div`
    width: 300px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    /* When hovering over the card, scale it */
    transition: transform 0.2s ease-out;
    &:hover {
        transform: scale(1.05);
    }
    /* Small screens */
    @media (max-width: 576px) {
        width: 200px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover; /* Scale the image to cover the entire area, maintaining the ratio */
    border-radius: 4px 4px 0 0;
    /* Small screens */
    @media (max-width: 576px) {
        height: 200px;
    }
`;

const Info = styled.div`
    padding: 10px;
    background: white;
    text-align: center;
`;

// Overlay of pet description appears when hovering over the image
const DescriptionOverlay = styled.div`
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

const PositionRelative = styled.div`
    position: relative;
    height: 300px;
    /* Small screens */
    @media (max-width: 576px) {
        height: 200px;
    }
`;

const ImageCard= ({ pet }: ImageCardProps) => {
    return (
        <Card>
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
