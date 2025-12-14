import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from "./components/Navbar/Navbar"

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App : React.FC =() => {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
      
    </>
  )
}

export default App
