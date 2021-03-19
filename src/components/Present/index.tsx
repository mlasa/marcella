import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { PresentationContainer } from './styles';

const Presentation: React.FC = () => {
  return (
    <PresentationContainer>
      <h1>
        <AiFillHeart />
        coding
      </h1>
      <button type="button">
        <a href="#about">Conheça-me</a>
      </button>
    </PresentationContainer>
  );
};

export default Presentation;
