import React from "react";
import { Box, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

export const DrawerTitle = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CloudIcon fontSize="large" />
      <Typography variant="h5" ml={2} my={2}>
        Weather App!
      </Typography>
    </Box>
  );
};
