import React from "react";
import { IWeather, IDailyForecast } from "../../interfaces";
import { Card, styled } from "@mui/material";
import { WeatherCardHeader } from "./weatherCardHeader";
import { WeatherCardMainContent } from "./weatherCardMainContent";
import { DailyForecast } from "../dailyForecast";

interface IWeatherCardProps {
  weather: IWeather;
  forecast: IDailyForecast[];
}

const StyledCard = styled(Card)({
  width: "60%",
  borderRadius: "10px",
});

export const WeatherCard = ({ weather, forecast }: IWeatherCardProps) => {
  return (
    <StyledCard>
      <WeatherCardHeader weather={weather} />
      <WeatherCardMainContent weather={weather} />
      <DailyForecast forecast={forecast} />
    </StyledCard>
  );
};
