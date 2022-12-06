import React, { useState } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { HeaderTitle } from "./HeaderTitle";
import { Tabs } from "./headerTabs";
import { Drawer } from "../drawer";
import { DrawerIcon } from "../drawer";
import { ThemeToggle } from "../themeToggle";
import { UnitToggle } from "../unitToggle";
import { Outlet } from "react-router-dom";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="space-between" flexGrow={1}>
            <DrawerIcon handleDrawerToggle={handleDrawerToggle} />
            <HeaderTitle />
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: { md: 8 } }}>
              <ThemeToggle />
              <UnitToggle />
            </Box>
            <Tabs />
            <Drawer
              isOpen={isDrawerOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
