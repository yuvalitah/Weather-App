import React from "react";
import { Drawer as MuiDrawer, Box, Divider } from "@mui/material";
import { DrawerTitle } from "./DrawerTitle";
import { DrawerList } from "./drawerList";
import { ThemeToggle } from "../themeToggle";
import { UnitToggle } from "../unitToggle";

interface IDrawerProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Drawer = ({ isOpen, handleDrawerToggle }: IDrawerProps) => {
  return (
    <MuiDrawer
      variant="temporary"
      open={isOpen}
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <Box onClick={handleDrawerToggle} textAlign="center" flex={1}>
        <DrawerTitle />
        <Divider />
        <DrawerList />
      </Box>
      <UnitToggle />
      <ThemeToggle />
    </MuiDrawer>
  );
};
