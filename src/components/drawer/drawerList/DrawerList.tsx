import React from "react";
import { List } from "@mui/material";
import { TABS } from "../../../constants";
import { DrawerListItem } from "./DrawerListItem";

export const DrawerList = () => {
  return (
    <List>
      {TABS.map((tab) => (
        <DrawerListItem key={tab.label} item={tab} />
      ))}
    </List>
  );
};
