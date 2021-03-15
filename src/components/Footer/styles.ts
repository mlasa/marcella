import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: var(--primaryLight);
  width: 100%;
  min-height: 100vh;
  color: var(--primaryLight);
  @media (max-width: 1000px) {
    .first-svg {
      display: none;
    }
    .second-svg {
      height: 170px;
    }
  }
  @media (min-width: 1000px) {
    .second-svg {
      display: none;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 400px;
  }

  span {
    text-align: center;
    align-self: center;
    background: var(--orange);
    margin-top: 20px;
    width: 10rem;
    font-size: 20px;
    color: var(--primaryDark);
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;
