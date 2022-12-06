import React from "react";
import { CardContent, Typography } from "@mui/material";
import { IWeather } from "../../../interfaces";
import { WeatherCardDetails } from "../weatherCardDetails";

interface IWeatherCardMainContentProps {
  weather: IWeather;
}

export const WeatherCardMainContent = ({
  weather,
}: IWeatherCardMainContentProps) => {
  const { description } = weather;

  return (
    <CardContent>
      <Typography variant="h6" textAlign="center">
        {description}
      </Typography>
      <WeatherCardDetails weather={weather} />
    </CardContent>
  );
};
