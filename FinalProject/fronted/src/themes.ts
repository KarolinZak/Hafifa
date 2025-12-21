import { createTheme } from "@mui/material/styles";
import "styled-components";

declare module "@mui/material/styles" {
  interface Theme {
    default: {
      colors: {
        coralRed: string;
        black: string;
        white: string;
      };
    };
  }

  export interface ThemeOptions {
    default?: {
      colors?: {
        coralRed?: string;
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
      black: "#000000",
      white: "#ffffff",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#5755f7" },
        secondary: { main: "#2196f3" },
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
        primary: { main: "#9b9aff" },
        secondary: { main: "#2196f3" },
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
