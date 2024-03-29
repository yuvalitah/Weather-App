import React from "react";
import { Card, styled, Grid, CardActionArea } from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import { TABS } from "../../constants";
import { FavoriteCityCardContent } from "./favoriteCityCardContent";
import { IFavoriteCity } from "../../interfaces";
import { useUnit } from "../../hooks";

interface IFavoriteCityCardProps {
  favorite: IFavoriteCity;
}

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
}));

export const FavoriteCityCard = ({
  favorite: {
    city,
    country,
    icon,
    description,
    temperature: { celcius, farenheit },
  },
}: IFavoriteCityCardProps) => {
  const navigate = useNavigate();
  const unit = useUnit();

  const navigateToCityCard = (city: string, country: string) => {
    navigate({
      pathname: TABS.find((tab) => tab.label === "Home")?.route,
      search: createSearchParams({
        city,
        country,
      }).toString(),
    });
  };

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <CardActionArea
        onClick={() => navigateToCityCard(city, country)}
        sx={{ color: "transparent" }}
      >
        <StyledCard>
          <FavoriteCityCardContent
            city={city}
            country={country}
            icon={icon}
            description={description}
            temperature={unit === "metric" ? celcius : farenheit}
          />
        </StyledCard>
      </CardActionArea>
    </Grid>
  );
};
