import React from "react";
import { styled, Box, Typography } from "@mui/material";

interface IBottomWeatherCardDetail {
  icon: JSX.Element;
  title: string;
  value: string;
}

const BottomWeatherCardDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    flexBasis: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexBasis: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    flexBasis: "25%",
  },
}));

export const BottomWeatherCardDetail = ({
  icon,
  title,
  value,
}: IBottomWeatherCardDetail) => (
  <BottomWeatherCardDetailsContainer>
    {icon}
    <Typography variant="body1">{title}</Typography>
    <Typography variant="body1" fontWeight={700}>
      {value}
    </Typography>
  </BottomWeatherCardDetailsContainer>
);
