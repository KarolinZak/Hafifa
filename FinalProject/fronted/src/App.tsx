import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"

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
      <Login/>
    </ThemeProvider>
      
    </>
  )
}

export default App
