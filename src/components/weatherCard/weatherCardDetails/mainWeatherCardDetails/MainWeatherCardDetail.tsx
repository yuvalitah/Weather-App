import React from "react";
import { Box, Typography } from "@mui/material";

interface IMainWeatherCardDetailProps {
  icon: JSX.Element;
  title: string;
  value: string;
}

export const MainWeatherCardDetail = ({
  icon,
  title,
  value,
}: IMainWeatherCardDetailProps) => (
  <Box display="flex" gap={1}>
    {icon}
    <Typography variant="body1">{title}</Typography>
    <Typography variant="body1" fontWeight={700}>
      {value}
    </Typography>
  </Box>
);
