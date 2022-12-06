import { favoriteCitySelector } from "../redux/selectors";
import { useSelector } from "react-redux";

export const useIsFavoriteCity = (id: number): boolean => {
  const allFavoriteCities = useSelector(favoriteCitySelector);
  return allFavoriteCities.map((favoriteCity) => favoriteCity.id).includes(id);
};
