import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --background: #181818;
    --gray: #e6e6e6;
    --red: #FA4447;
    --primaryTitle: #303030;
    --secondaryTitle: #3d3d3d;
    --text: #474747;
  };

  @media(max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  body{
    font-family: 'Montserrat', sans-serif;
    background: var(--background);
    color: var(--white);
    -webkit-font-smoothing:antialiased;

    width: 100vw;
    height: 100vh;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  body,input,button{
    font-size:16px;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight:500;
  }
  button{
    cursor:pointer;
    border-radius: 5px;
  }
`;
