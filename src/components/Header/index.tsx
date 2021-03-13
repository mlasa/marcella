import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">Sobre Mim</Link>
      <Link to="/">Skills</Link>
    </HeaderContainer>
  );
};

export default Header;
