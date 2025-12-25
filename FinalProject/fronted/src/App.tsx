import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import { appRoutes } from "./Consts/routesConsts";
import Navbar from "./components/Navbar/Navbar";
import { AuthContext } from "./Types/authTypes";
import type { User } from "./Types/user.Types";
import { useState } from "react";
import "./App.css";






const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});


const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContext value={{ currentUser, setCurrentUser }}>
          <BrowserRouter>
            <Navbar />
            <main>
              <Routes>
                {appRoutes.map(({ path, element }) => (
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
        </AuthContext>
      </ThemeProvider>
    </>
  );
};

export default App;
