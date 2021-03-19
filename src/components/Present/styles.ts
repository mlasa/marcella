import styled from 'styled-components';

export const PresentationContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: var(--white);
  background: var(--main-dark);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background: var(--main-pink);
    border: none;
    padding: 10px;
    border-radius: 50px;
    height: 45px;
    width: 200px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    color: var(--white);
    font-size: 20px;
    font-weight: 600;
  }

  h1 {
    font-family: 'Fira Code', monospace;
    font-size: 55px;
    text-align: center;
    word-wrap: break-word;
    @media (max-width: 1000px) {
      & {
        width: 15rem;
      }
    }

    svg {
      margin-right: 8px;
    }
  }
`;
