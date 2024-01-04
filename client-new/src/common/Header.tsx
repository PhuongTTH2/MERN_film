import * as React from "react";
import {AppBar, Box, Toolbar, IconButton, Container, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import Logo from "./Logo";
import { menuConfigs } from "configs/menu.configs";
import { useSelector, useDispatch } from "react-redux";
import { themeModes } from "configs/theme.configs";
import { setThemeMode } from "redux/features/themeModeSlice";
const Header = () => {
  const { themeMode } = useSelector((state: any) => state.themeMode);

  const dispatch = useDispatch();
  const onSwithTheme = () => {
    const theme =
      themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            flexGrow={1}
            alignItems="center"
            display={{ xs: "none", md: "flex" }}
          >
            <Box sx={{ marginRight: "30px" }}>
              <Logo />
            </Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: themeMode === themeModes.dark
                    ? "primary.contrastText"
                    : "inherit",
                  mr: 2,
                }}
                // component={Link}
                // to={item.path}
                variant={"text"}
              >
                {item.display}
              </Button>
            ))}
            <IconButton sx={{ color: "inherit" }} onClick={onSwithTheme}>
              {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
              {themeMode === themeModes.light && <WbSunnyOutlinedIcon />}
            </IconButton>
          </Box>

          {/* small */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ marginRight: "30px" }}>
              <Logo />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="error"
              // onClick={()=> dispatch(setAuthModalOpen(true))}
            >
              sign in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
