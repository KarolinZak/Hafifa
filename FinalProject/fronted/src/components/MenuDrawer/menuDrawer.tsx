import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";
import { menuRoutes } from "../../Consts/routesConsts";
import { useNavigate } from "react-router-dom";
import * as S from "./MenuDrawer.styles";

const MenuDrawer: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}> = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
      <S.UserContainer>
        <S.Avatar src="/avatar.png" alt="Pedro Malo" />

        <S.TextContainer>
          <S.NameText>Pedro Malo</S.NameText>
          <S.EmailText>PedroMalo@gmail.com</S.EmailText>
        </S.TextContainer>
      </S.UserContainer>
      <Divider />
      <List>
        {menuRoutes.map((route) => (
          <ListItem key={route.routeName} disablePadding>
            <ListItemButton onClick={() => navigate(route.routeName)}>
              <ListItemIcon>
                <route.routeIcon />
              </ListItemIcon>
              <S.ListItemTextStyled
                primary={route.routeName.replace("/", "").toUpperCase()}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
