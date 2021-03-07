import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @font-face {
  font-family: 'Trap';
  src: url(../assets/fonts/Trap-Regular.otf) format('otf');
  font-style: normal;
  font-weight: 400;
  }

  @font-face {
    font-family: 'Trap';
    src: url(fonts/Trap-SemiBold.otf) format('otf');
    font-style: normal;
    font-weight: 600;
  }

  html {
    font-family: 'Trap', Roboto, 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell,  'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p, li, a {
    line-height: 150%;
    font-size: 1.5rem;
  }


  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    margin: 0;
  }

  h1, h2, h3 {
    font-size: clamp(1rem, 4vw, 3rem);
    letter-spacing: -1px;
  }

  a {
    color: var(--black);
    text-decoration: none;l
  }

  .center {
    text-align: center;
  }

  .bold {
    font-weight: 600;
  }
`;

export default Typography;
