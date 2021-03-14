import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --semiTransparent: 0.8;
    --white: hsla(195,8%,90%,1);
    ${'' /* --lightGreen: hsla(96,6%,65%,1); */}
    --lightGreen: hsla(195,8%,82%,1);
    ${'' /* --darkGreen: hsla(96,6%,50%,1); */}
    --darkGreen: hsla(195,8%,56%,1);
    --black: hsla(195,8%,16%,1);

    --whiteTransparent: hsla(104,100%,100%,var(--semiTransparent));
    --blackTransparent: hsla(195,8%,16%,0.2);

    --sectionWidth: 1920px;
    ${'' /* --textWidth: 640px; */}
    --textWidth: 480px;

    --contentPadding: clamp(2rem, 4vw, 4rem);
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
    background-color: var(--lightGreen);
  }

  hr {
    border: none;
    border-bottom: 1px solid var(--black);
    margin: 0;
    width: 100%;
  }

  body {
    font-size: 1rem;
  }
  
  li {
    list-style: disc;
    
  }

  button {
    border: 0;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  .cta-bar {
    display: flex;
    flex-flow:  nowrap;
    width: 100%;
    justify-items: space-between;
    
    & > a {
      padding: 1rem 0;
    }

    &::after {
      content: ' →'
    }
  }
`;

export default GlobalStyles;
