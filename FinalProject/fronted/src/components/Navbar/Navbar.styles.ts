import MuiLightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MuiDarkModeIcon from '@mui/icons-material/DarkMode';
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material";
import colorTheme from '../../themes';
import { useTheme } from '@mui/material/styles';


export const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  minWidth: "30vw",
  minHeight: "4vh",
  backgroundColor: theme.palette.mode === "dark"
    ? colorTheme.default.colors.darkPurple
    : colorTheme.default.colors.lightPink,
}));


export const StyledLightModeIcon = styled(MuiLightModeOutlinedIcon)(() => ({
  color: colorTheme.default.colors.white,
}));

export const StyledDarkModeIcon = styled(MuiDarkModeIcon)(() => ({
  color: colorTheme.default.colors.white,
}));


export const Text= styled('div')(() => ({
  flexGrow: '1',
  fontSize: "1.25rem", 
  fontWeight: 500,
  lineHeight: 1.6,
}));