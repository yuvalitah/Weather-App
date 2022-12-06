import React from "react";
import { CardHeader, Typography, Box } from "@mui/material";
import { getTemperatureString } from "../../../utils";
import { useUnit } from "../../../hooks";

interface IFavoriteCityCardContentProps {
  city: string;
  country: string;
  icon: string;
  description: string;
  temperature: number;
}

export const FavoriteCityCardContent = ({
  city,
  country,
  description,
  icon,
  temperature,
}: IFavoriteCityCardContentProps) => {
  const unit = useUnit();

  return (
    <>
      <CardHeader
        title={
          <Typography variant="h5" textAlign="center" noWrap>
            {city}, {country}
          </Typography>
        }
      />
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={icon} alt="" />
        <Typography variant="h6" textAlign="center">
          {getTemperatureString(temperature, unit)}
        </Typography>
        <Typography variant="h6" textAlign="center">
          {description}
        </Typography>
      </Box>
    </>
  );
};
