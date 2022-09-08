import { createGlobalStyle } from "styled-components";
import Degarism from "../fonts/Degarism.otf";
import MP from "../fonts/MidPoint.otf";

export const variable = {
	purple: "rgba(86,72,207,255)",
	lightGreen: "#5edc8a",
	green: "#37b34a",
	blue: "#4749ff",
	ash: "#837e7e",
	grey: "#f5f5f5",
	yellow: "rgba(252,218,105,255)",
	lightBrown: "#fffcf2",
	greenishYellow: "rgba(213,250,81,255)",
	darkGrey: "#1d1d1d",
	fontLinkColor: "#333",
	fontColor: "#111",
	white: "#fff",
};

const GlobalStyles = createGlobalStyle`
   @font-face{
      font-family: 'Degarism';
      src: url(${Degarism}) format('opentype')
   }
   @font-face{
      font-family: MP;
      src: url(${MP}) format('opentype')
   }
   *, *::before, *::after{
      font-family: MP;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
   }
`;

export default GlobalStyles;
