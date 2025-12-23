import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import { appRoutes } from './Consts/routesConsts';
import { ToastContainer, Zoom } from 'react-toastify';



const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
}); // TODO: customize theme

const App : React.FC =() => {
  

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <main>
        <Routes> 
          {appRoutes.map(({path, element}) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Zoom}
                />
      </main>
      </BrowserRouter>
       
    </ThemeProvider>
      
    </>
  )
}

export default App
