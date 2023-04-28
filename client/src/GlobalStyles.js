import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const FontImport = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
`;

const GlobalStyles = createGlobalStyle`

  body, h1 {
    font-family: 'Monoton', cursive;
  }
`;

export { FontImport, GlobalStyles };