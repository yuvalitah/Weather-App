import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

export interface IHomeTextField {
  label: string;
  name: string;
  icon: JSX.Element;
}

export const HOME_TEXT_FIELDS: IHomeTextField[] = [
  {
    label: "Country",
    name: "country",
    icon: <LanguageRoundedIcon fontSize="large" sx={{ mr: 1 }} />,
  },
  {
    label: "City",
    name: "city",
    icon: <LocationCityRoundedIcon fontSize="large" sx={{ mr: 1 }} />,
  },
];
