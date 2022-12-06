import { favoriteCitySelector } from "../redux/selectors";
import { useSelector } from "react-redux";

export const useFavorites = () => useSelector(favoriteCitySelector);
