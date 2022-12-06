import React from "react";
import { useFavorites } from "../../../hooks";
import { FavoriteCityCard } from "../../favoriteCityCard";
import { Paper, styled, Grid } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  flex: 1,
}));

export const FavoritesPage = () => {
  const favorites = useFavorites();

  return (
    <StyledPaper>
      <Grid
        container
        justifyContent="center"
        mt={5}
        width="80%"
        columnSpacing={5}
      >
        {favorites.map((favorite) => (
          <FavoriteCityCard key={favorite.id} favorite={favorite} />
        ))}
      </Grid>
    </StyledPaper>
  );
};
