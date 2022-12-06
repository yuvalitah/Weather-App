import React from "react";
import { IWeather } from "../../../interfaces";
import { Box } from "@mui/material";
import { MainWeatherCardDetails } from "./mainWeatherCardDetails";
import { BottomWeatherCardDetails } from "./bottomWeatherCardDetails";
import { useUnit } from "../../../hooks";

interface IWeatherCardDetailsProps {
  weather: IWeather;
}

export const WeatherCardDetails = ({
  weather: {
    icon,
    temperature: {
      celcius: {
        currentTemperature: celciusCurrentTemperature,
        feelsLikeTemperature: celciusFeelsLikeTemperature,
        maxTemperature: celciusMaxTemperature,
        minTemperature: celciusMinTemperature,
      },
      farenheit: {
        currentTemperature: farenheitCurrentTemperature,
        feelsLikeTemperature: farenheitFeelsLikeTemperature,
        maxTemperature: farenheitMaxTemperature,
        minTemperature: farenheitMinTemperature,
      },
    },
    humidity,
    windSpeed: { celcius: celciusWindSpeed, farenheit: farenheitWindSpeed },
    sunrise,
    sunset,
  },
}: IWeatherCardDetailsProps) => {
  const unit = useUnit();

  return (
    <Box display="flex" flexDirection="column" sx={{ gap: { xs: 2, md: 5 } }}>
      <MainWeatherCardDetails
        icon={icon}
        currentTemperature={
          unit === "metric"
            ? celciusCurrentTemperature
            : farenheitCurrentTemperature
        }
        feelsLikeTemperature={
          unit === "metric"
            ? celciusFeelsLikeTemperature
            : farenheitFeelsLikeTemperature
        }
        humidity={humidity}
        windSpeed={unit === "metric" ? celciusWindSpeed : farenheitWindSpeed}
      />
      <BottomWeatherCardDetails
        maxTemperature={
          unit === "metric" ? celciusMaxTemperature : farenheitMaxTemperature
        }
        minTemperature={
          unit === "metric" ? celciusMinTemperature : farenheitMinTemperature
        }
        sunrise={sunrise}
        sunset={sunset}
      />
    </Box>
  );
};
