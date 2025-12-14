import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useColorScheme } from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Navbar: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        backgroundColor: '#d55c5c',
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          
        </Typography>
         <Button onClick={() =>  setMode(mode === "dark" ? "light" : "dark")}>
          {mode === "dark"? <DarkModeIcon sx={{color: '#ffffff'}}/> : <LightModeOutlinedIcon sx={{color: '#ffffff'}}/>}
        </Button>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;