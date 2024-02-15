import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

body {
    background-color:${({ theme }) => theme.color.body};
  margin: 0;
  font-family:'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyles;
