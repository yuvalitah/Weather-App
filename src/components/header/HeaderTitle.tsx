import React from "react";
import { Box, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

export const HeaderTitle = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <CloudIcon fontSize="large" />
      <Typography variant="h4" marginLeft={3} noWrap>
        Weather App!
      </Typography>
    </Box>
  );
};
