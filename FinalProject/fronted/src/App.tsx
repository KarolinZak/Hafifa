import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login'
import './App.css'



const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App : React.FC =() => {
  

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <main>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<></>} />
        </Routes>
      </main>
      </BrowserRouter>
       
    </ThemeProvider>
      
    </>
  )
}

export default App
