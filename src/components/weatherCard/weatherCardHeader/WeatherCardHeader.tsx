import React from "react";
import { CardHeader, Typography, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addFavoriteCityAction,
  removeFavoriteCityAction,
} from "../../../redux/actions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useIsFavoriteCity, useSnackbar } from "../../../hooks";
import { IWeather, IFavoriteCity } from "../../../interfaces";

interface IWeatherCardHeaderProps {
  weather: IWeather;
}

export const WeatherCardHeader = ({
  weather: {
    id,
    name: city,
    country,
    date,
    icon,
    description,
    temperature: {
      celcius: { currentTemperature: celciusTemperature },
      farenheit: { currentTemperature: farenheitTemperature },
    },
  },
}: IWeatherCardHeaderProps) => {
  const dispatch = useDispatch();
  const isFavorite = useIsFavoriteCity(id);
  const { openSnackbar } = useSnackbar();

  const addFavoriteCity = (city: IFavoriteCity) => {
    dispatch(addFavoriteCityAction(city));
    openSnackbar(
      "We've added the location to your favorites successfully!",
      "success"
    );
  };

  const removeFavoriteCity = (id: number) => {
    dispatch(removeFavoriteCityAction(id));
    openSnackbar(
      "We've removed the location from your favorites successfully!",
      "success"
    );
  };

  return (
    <CardHeader
      title={
        <>
          <Typography variant="h6" textAlign="center" marginBottom={2}>
            {date}
          </Typography>
          <Typography variant="h4" textAlign="center">
            {city}, {country}
          </Typography>
        </>
      }
      action={
        <IconButton
          onClick={() =>
            isFavorite
              ? removeFavoriteCity(id)
              : addFavoriteCity({
                  id,
                  city,
                  country,
                  icon,
                  description,
                  temperature: {
                    celcius: celciusTemperature,
                    farenheit: farenheitTemperature,
                  },
                })
          }
        >
          {isFavorite ? (
            <FavoriteOutlinedIcon />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </IconButton>
      }
    ></CardHeader>
  );
};
