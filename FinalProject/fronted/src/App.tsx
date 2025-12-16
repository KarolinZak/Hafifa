import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Form from "./components/Form/Form"
import { EmailRegex, type FormFields } from './components/Form/Form.types';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App : React.FC =() => {
  const loginFields: FormFields[] = [
  { name: "mail", label: "Email", regex: EmailRegex, required: true },
  { name: "password", label: "Password", regex: /.+/, required: true },
  ];

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Form formFields={loginFields}/> 
    </ThemeProvider>
      
    </>
  )
}

export default App
