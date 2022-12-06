import React from "react";
import { Box } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { useUnit } from "../../../../hooks";
import { getTemperatureString } from "../../../../utils";
import { BottomWeatherCardDetail } from "./BottomWeatherCardDetail";

interface IBottomWeatherCardDetailsProps {
  maxTemperature: number;
  minTemperature: number;
  sunrise: string;
  sunset: string;
}

export const BottomWeatherCardDetails = ({
  maxTemperature,
  minTemperature,
  sunrise,
  sunset,
}: IBottomWeatherCardDetailsProps) => {
  const unit = useUnit();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      sx={{
        rowGap: { xs: 2, md: 3 },
      }}
    >
      <BottomWeatherCardDetail
        icon={<WbSunnyOutlinedIcon />}
        title="Rise:"
        value={sunrise}
      />
      <BottomWeatherCardDetail
        icon={<WbTwilightOutlinedIcon />}
        title="Set:"
        value={sunset}
      />
      <BottomWeatherCardDetail
        icon={<ArrowUpwardOutlinedIcon />}
        title="High:"
        value={getTemperatureString(maxTemperature, unit)}
      />
      <BottomWeatherCardDetail
        icon={<ArrowDownwardOutlinedIcon />}
        title="Low:"
        value={getTemperatureString(minTemperature, unit)}
      />
    </Box>
  );
};
