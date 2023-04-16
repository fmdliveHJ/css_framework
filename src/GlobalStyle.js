import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  /* btn size */
.btn_big {
  width: 462px;
  height: 60px;
  background: #fff;
  border: 1px solid #dcdddd;
  border-radius: 5px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3d3d3d; }

.btn_large {
  display: block;
  width: 400px;
  height: 48px;
  border-radius: 5px; }

.btn_middle {
  padding: 0 8px;
  min-width: 77px;
  height: 26px;
  background: #fff;
  border-radius: 3px;
  box-sizing: border-box; }

.btn_small {
  width: 67px;
  height: 27px;
  border-radius: 3px; }
`;

export default GlobalStyle;
