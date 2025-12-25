import ListItemButton from "@mui/material/ListItemButton";
import { menuRoutes } from "../../Consts/routesConsts";
import ListItemIcon from "@mui/material/ListItemIcon";
import { AuthContext } from "../../Types/authTypes";
import profileImage from "../../Assets/profile.png";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as S from "./MenuDrawer.styles";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { useContext } from "react";

const MenuDrawer: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}> = ({ open, setOpen }) => {
  const auth = useContext(AuthContext);
  if (!auth) return null;
  const { currentUser, setCurrentUser } = auth;

  const navigate = useNavigate();
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
      <S.UserContainer>
        <S.Avatar src={profileImage} />

        <S.TextContainer>
          <S.NameText>{currentUser?.firstName} {currentUser?.lastName}</S.NameText>
          <S.EmailText>{currentUser?.mail}</S.EmailText>
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
