import React from "react";
import {
  Box,
  TextField as MuiTextField,
  StandardTextFieldProps,
  FilledTextFieldProps,
  OutlinedTextFieldProps,
} from "@mui/material";

interface ITextFieldProps {
  value: string;
  label: string;
  name: string;
  variant:
    | StandardTextFieldProps["variant"]
    | FilledTextFieldProps["variant"]
    | OutlinedTextFieldProps["variant"];
  handleOnChange: (name: string, value: string) => void;
  icon?: JSX.Element;
}

export const TextField = ({
  value,
  label,
  icon,
  name,
  variant,
  handleOnChange,
}: ITextFieldProps) => {
  return (
    <Box display="flex" alignItems="center">
      {icon}
      <MuiTextField
        value={value}
        label={label}
        name={name}
        variant={variant}
        sx={{ mb: 2 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange(event.target.name, event.target.value)
        }
      />
    </Box>
  );
};
