import styled from 'styled-components';
import BackgroundImg from '../../assets/keyboardDark.jpg';

export const SkillsContainer = styled.div`
  background: var(--background);
  width: 100%;
  min-height: 100vh;
  color: var(--primaryLight);

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Fira Code', monospace;
    font-size: 30px;
    margin-bottom: 30px;
    padding: 20px 20px;
  }
  div {
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;

      strong {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.4;
        padding: 0 20px 0 20px;
      }
      svg {
        margin: 20px 8px;
      }
    }
  }
`;
