import React from 'react';
import usePetData from '../hooks/usePetData'
import ImageCard from './ImageCard';
import styled from 'styled-components';

const StyledImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ImageGrid = () => {
    const { pets, loading, error } = usePetData();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading images: {String(error)}</p>;

    return (
        <StyledImageGrid>
            {pets.map(pet => (
                // Assume that the title is unique
                <ImageCard key={pet.title} pet={pet}/> 
            ))}
        </StyledImageGrid>
    );
};

export default ImageGrid;

