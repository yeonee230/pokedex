import { createGlobalStyle } from 'styled-components';
export const Colors = {
    Primary: "#1199FA",
    Link: "#93d2fd",
    PrimaryDark: "#0F1C39",
    PrimaryDisable: "#1e3f6f",
    Background: "#0B1426",
    White: "#FEFEFE",
    Black: "#212121",
    Border: "#e3e3e3",
    Gray: "rgb(148, 155, 164)",
    GrayBG: "#f7f9fa",
    Gradients: { PrimaryToSec: ["#1199FA", "#10C0E9"] },
  };
  
  const BreakPoints = {
    MobileS: "320px",
    MobileM: "375px",
    MobileL: "425px",
    Tablet: "768px",
    Laptop: "1024px",
    LaptopL: "1440px",
    Desktop: "2560px",
  };
  
  export const Devices = {
    MobileS: `(min-width: ${BreakPoints.MobileS})`,
    MobileM: `(min-width: ${BreakPoints.MobileM})`,
    MobileL: `(min-width: ${BreakPoints.MobileL})`,
    Tablet: `(min-width: ${BreakPoints.Tablet})`,
    Laptop: `(min-width: ${BreakPoints.Laptop})`,
    LaptopL: `(min-width: ${BreakPoints.LaptopL})`,
    Desktop: `(min-width: ${BreakPoints.Desktop})`,
  };


export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
    padding: 0;
};
body {
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
}
`
