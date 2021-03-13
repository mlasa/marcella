import styled from 'styled-components';
import PresentationBackground from '../../assets/world.jpg';

export const PresentationContainer = styled.div`
  background: url(${PresentationBackground}) no-repeat center;
  background-size: cover;

  width: 100%;
  min-height: 100vh;
  color: var(--primaryLight);

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 55px;
    margin-bottom: 30px;
    padding: 0 20px 0 20px;
  }
`;
