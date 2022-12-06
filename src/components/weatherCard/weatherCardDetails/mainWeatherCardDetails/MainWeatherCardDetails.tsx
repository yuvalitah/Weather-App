import React from "react";
import { Box, Typography } from "@mui/material";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import { useUnit } from "../../../../hooks";
import { getTemperatureString, getWindSpeedString } from "../../../../utils";
import { MainWeatherCardDetail } from "./MainWeatherCardDetail";

interface IMainWeatherCardDetailsProps {
  icon: string;
  currentTemperature: number;
  feelsLikeTemperature: number;
  humidity: number;
  windSpeed: number;
}

export const MainWeatherCardDetails = ({
  icon,
  humidity,
  windSpeed,
  currentTemperature,
  feelsLikeTemperature,
}: IMainWeatherCardDetailsProps) => {
  const unit = useUnit();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      sx={{ flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 0 } }}
    >
      <img src={icon} alt="" />
      <Typography variant="h3">
        {getTemperatureString(currentTemperature, unit)}
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <MainWeatherCardDetail
          icon={<DeviceThermostatOutlinedIcon />}
          title="Feels like:"
          value={getTemperatureString(feelsLikeTemperature, unit)}
        />
        <MainWeatherCardDetail
          icon={<OpacityOutlinedIcon />}
          title="Humidity:"
          value={`${humidity}%`}
        />
        <MainWeatherCardDetail
          icon={<AirOutlinedIcon />}
          title="Wind:"
          value={getWindSpeedString(windSpeed, unit)}
        />
      </Box>
    </Box>
  );
};
