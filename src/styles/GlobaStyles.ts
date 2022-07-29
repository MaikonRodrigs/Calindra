import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition:all 400ms ease;
    scroll-behavior:smooth
    }
    html, border-style, #root {
        max-height: 100vh;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto Condensed', sans-serif;
    }
    
    html {
      background: var(--bg_footer);
      color: var(--dark);
    }
    
    ul {
    list-style: none;
  }
    :root {
    --white: #ffffff;
    --black: #1A1A1A;

    --text_primary: #846219;
    --bg_primary: #716565;
    --bg_secondary: #506fa9;
    --bg_footer: #e9e9e9;
  }
`;