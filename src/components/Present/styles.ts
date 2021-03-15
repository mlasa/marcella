import styled from 'styled-components';

export const PresentationContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: var(--primaryLight);
  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg:hover {
    color: var(--orange);
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;

    @media (max-width: 1000px) {
      > svg {
        display: none;
      }
    }

    h1 {
      font-family: 'Fira Code', monospace;
      font-size: 55px;
      align-items: center;
    }
    & + svg {
      margin-top: 20px;
    }
  }
`;
