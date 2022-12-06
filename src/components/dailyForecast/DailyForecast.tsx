import React from "react";
import { IDailyForecast } from "../../interfaces";
import { DailyForcastItem } from "./DailyForcastItem";
import { Box } from "@mui/material";
import { useUnit } from "../../hooks";

interface IDailyForecastProps {
  forecast: IDailyForecast[];
}

export const DailyForecast = ({ forecast }: IDailyForecastProps) => {
  const unit = useUnit();

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={5}
      my={1.5}
      flexWrap="wrap"
    >
      {forecast.map(({ day, icon, temperature: { celcius, farenheit } }) => (
        <DailyForcastItem
          key={day}
          day={day}
          icon={icon}
          temperature={unit === "metric" ? celcius : farenheit}
        />
      ))}
    </Box>
  );
};
