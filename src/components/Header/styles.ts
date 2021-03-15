import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: inherit;
  justify-content: space-around;
  align-items: center;
  color: var(--primaryDark);
  font-weight: 600;
  height: 50px;
  padding: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  a {
    padding: 10px;
    text-align: center;
    font-family: 'Fira Code', monospace;
    transition: background 0.3s;
  }
  a:hover {
    color: var(--white);
    background: var(--primaryDark);
  }
`;
