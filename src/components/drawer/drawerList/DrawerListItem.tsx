import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ITab } from "../../../constants";
import { useHistory } from "react-router-dom";

interface IDrawerListItemProps {
  item: ITab;
}

export const DrawerListItem = ({
  item: { label, route, icon },
}: IDrawerListItemProps) => {
  const history = useHistory();

  return (
    <ListItem key={label} disablePadding>
      <ListItemButton
        sx={{ textAlign: "center", pl: 2.5 }}
        onClick={() => history.push(route)}
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
