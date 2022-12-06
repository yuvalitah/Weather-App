import React from "react";
import { Box } from "@mui/material";
import { TextField } from "./TextField";
import { HOME_TEXT_FIELDS, IHomeTextField } from "../../constants";

export interface ICityAndCountryTextField {
  city: string;
  country: string;
}

interface ICityAndCountryTextFieldsProps {
  cityAndCountryValues: ICityAndCountryTextField;
  handleOnChangeField: (name: string, value: string) => void;
}

export const CityAndCountryTextFields = ({
  cityAndCountryValues,
  handleOnChangeField,
}: ICityAndCountryTextFieldsProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 3, md: 5 },
      }}
    >
      {HOME_TEXT_FIELDS.map(({ label, name, icon }: IHomeTextField) => (
        <TextField
          key={name}
          value={cityAndCountryValues[name as keyof ICityAndCountryTextField]}
          label={label}
          name={name}
          icon={icon}
          variant="standard"
          handleOnChange={handleOnChangeField}
        />
      ))}
    </Box>
  );
};
