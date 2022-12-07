import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HomePage, FavoritesPage } from "../components/pages";

export interface ITab {
  label: string;
  route: string;
  icon: JSX.Element;
  component: React.FC;
  exact: boolean;
}

export const TABS: ITab[] = [
  {
    label: "Home",
    route: "/",
    icon: <HomeIcon fontSize="large" />,
    component: HomePage,
    exact: true,
  },
  {
    label: "Favorites",
    route: "/favorites",
    icon: <FavoriteIcon fontSize="large" />,
    component: FavoritesPage,
    exact: false,
  },
];
