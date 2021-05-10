import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  // This defines what 1rem is
  font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
  overflow: auto;
}
body {
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

h1{
  font-size: 3.5rem;
}
p{
  font-size: 1.6rem;
}
`;

export default GlobalStyle;
