import { Toolbar, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import * as S from "./Navbar.styles";
import { themes } from "../../Types/Navbar.types";


const Navbar: React.FC = () => {
  const location = useLocation();
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <S.StyledAppBar position="fixed">
      <Toolbar>
        {" "}
        {location.pathname !== "/login" && location.pathname !== "/signup" && ( 
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
        )}
        <S.Text>
            {location.pathname.replace("/", "").toUpperCase()}
          </S.Text>
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
      </Toolbar>
    </S.StyledAppBar>
  );
};

export default Navbar;
