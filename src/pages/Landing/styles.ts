import styled from 'styled-components';

export const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  height: 100vh;
  overflow-x: hidden;

  @media (max-width: 1170px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const FixedContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: var(--background);
  color: var(--primaryLight);

  div {
    flex: 1;
    display: flex;
    align-items: center;
  }
  h1 {
    font-family: 'Patua One', cursive;
    font-size: 55px;

    width: 360px;
  }
`;

export const Content = styled.div`
  background: var(--white);
  flex: 1;
  width: 100%;

  overflow: auto;
`;
