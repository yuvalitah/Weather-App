import React from "react";
import { Box, Typography } from "@mui/material";
import { useUnit } from "../../hooks";
import { getTemperatureString } from "../../utils";

interface IDailyForcastItemProps {
  day: string;
  icon: string;
  temperature: number;
}

export const DailyForcastItem = ({
  day,
  icon,
  temperature,
}: IDailyForcastItemProps) => {
  const unit = useUnit();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">{day}</Typography>
      <img src={icon} alt="" />
      <Typography variant="h6">
        {getTemperatureString(temperature, unit)}
      </Typography>
    </Box>
  );
};
