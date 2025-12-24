import { Toolbar, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Navbar.styles";
import { themes } from "../../Types/navbarTypes";
import { appRoutes } from "../../Consts/routesConsts";
import { useState } from "react";
import MenuDrawer from "../MenuDrawer/MenuDrawer";

const Navbar: React.FC = () => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <S.StyledAppBar position="fixed">
      <Toolbar>
        {appRoutes.some(
          (route) => location.pathname == route.path && route.protected
        ) && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setDrawerToggle(true)}
            >
              <MenuIcon />
            </IconButton>
            <MenuDrawer open={drawerToggle} setOpen={setDrawerToggle} />
          </>
        )}
        <S.Text>{location.pathname.replace("/", "").toUpperCase()}</S.Text>
        <Button
          onClick={() =>
            setMode(mode === themes.Dark ? themes.Light : themes.Dark)
          }
        >
          {mode === themes.Dark ? (
            <S.StyledDarkModeIcon />
          ) : (
            <S.StyledLightModeIcon />
          )}
        </Button>
        {appRoutes.some(
          (route) => location.pathname == route.path && route.protected
        ) && (
          <Button onClick={() => logout()}>
            <S.StyledLogoutIcon />
          </Button>
        )}
      </Toolbar>
    </S.StyledAppBar>
  );
};

export default Navbar;
