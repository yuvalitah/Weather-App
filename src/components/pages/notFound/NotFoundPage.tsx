import React from "react";
import { Typography, Paper, styled } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  flex: 1,
}));

export const NotFoundPage = () => (
  <StyledPaper>
    <Typography variant="h2" textAlign="center" mt={5}>
      Page is not found! please go back to the Home page.
    </Typography>
  </StyledPaper>
);
