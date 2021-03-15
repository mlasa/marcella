import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FooterContainer } from './styles';
import Girl from '../../assets/girl.svg';
import Face from '../../assets/face.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <img className="first-svg" src={Girl} alt="Mulher acenando" />
      <img className="second-svg" src={Face} alt="Mulher sorrindo" />
      <span>Made by a Dev</span>
      <span>
        Made with <AiFillHeart />
      </span>
    </FooterContainer>
  );
};

export default Footer;
