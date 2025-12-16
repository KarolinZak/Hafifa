import { Toolbar, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";
import * as S from "./Navbar.styles";
import { themes } from "./Navbar.types";

const Navbar: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <S.StyledAppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        {/* // TODO: don't show if not allowed */}
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
