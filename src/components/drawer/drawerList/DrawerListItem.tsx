import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ITab } from "../../../constants";
import { useNavigate } from "react-router-dom";

interface IDrawerListItemProps {
  item: ITab;
}

export const DrawerListItem = ({
  item: { label, route, icon },
}: IDrawerListItemProps) => {
  const navigate = useNavigate();

  return (
    <ListItem key={label} disablePadding>
      <ListItemButton
        sx={{ textAlign: "center", pl: 2.5 }}
        onClick={() => navigate(route)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: "h5" }}
        />
      </ListItemButton>
    </ListItem>
  );
};
