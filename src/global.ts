import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --background: #242424;
    --gray: #e6e6e6;
    --orange: #fc9803;
    --primaryDark: #303030;
    --primaryLight: #f5f5f5;
  };

  @media(max-width: 1080px) {
    html{
      font-size: 93.75%;
      // scroll-behavior: smooth;
    }
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  body{
    font-family: sans-serif;
    background: var(--background);
    color: var(--primaryDark);
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
