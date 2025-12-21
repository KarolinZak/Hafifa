import { createTheme } from "@mui/material/styles";
import "styled-components";

declare module "@mui/material/styles" {
  interface Theme {
    default: {
      colors: {
        coralRed: string;
        lightPink: string;
        darkPurple?: string;
        black: string;
        white: string;
      };
    };
  }

  export interface ThemeOptions {
    default?: {
      colors?: {
        coralRed?: string;
        lightPink?: string;
        darkPurple?: string;
        black?: string;
        white?: string;
      };
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Assistant, Arial",
  },
  default: {
    colors: {
      coralRed: "#d55c5c",
      lightPink: "#eda4bd",
      darkPurple: "#6c1452",
      black: "#000000",
      white: "#ffffff",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#eda4bd" },
        background: {
          default: "#f5f6f9",
          paper: "#ffffff",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#595a7f",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#551066" },
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#cccccc",
        },
      },
    },
  },
});

export default theme;
