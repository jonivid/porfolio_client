// theme.js

import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff", // Light background color
    },
    text: {
      primary: "#000000", // Dark text for light background
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#18181b", // Your existing dark background color
    },
    text: {
      primary: "#ffffff", // White text on dark background
    },
  },
});
