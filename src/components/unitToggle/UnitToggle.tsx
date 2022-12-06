import React from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, Switch } from "@mui/material";
import { setUnitAction } from "../../redux/actions";
import { useUnit } from "../../hooks";

export const UnitToggle = () => {
  const dispatch = useDispatch();
  const unit = useUnit();

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        justifyContent: { xs: "center" },
        mb: { xs: 3, md: 0 },
      }}
    >
      <Typography variant="h5">Metric</Typography>
      <Switch
        checked={unit === "imperial"}
        onChange={() =>
          dispatch(setUnitAction(unit === "metric" ? "imperial" : "metric"))
        }
        color="secondary"
      />
      <Typography variant="h5">Imperial</Typography>
    </Box>
  );
};
