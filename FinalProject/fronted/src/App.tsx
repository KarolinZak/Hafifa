import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Form from "./components/Form/Form"
import { loginFields, signupFields } from './App.types';
import { loginClient, signinClient } from './components/api/auth.api';

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
          <Route path="/" element={<Form header={"Login"} info={"Login to Hafifa school"} formFields={loginFields} handleSubmitClick={loginClient}/>} />
          <Route path="/signup" element={<Form header={"Signup"} info={"Signup to Hafifa school"} formFields={signupFields} handleSubmitClick={signinClient}/>} />
        </Routes>
      </main>
      </BrowserRouter>
       
    </ThemeProvider>
      
    </>
  )
}

export default App
