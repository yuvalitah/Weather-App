import { RootState } from "../store/";
import { IFavoriteCity } from "../../interfaces";

export const favoriteCitySelector = (state: RootState): IFavoriteCity[] =>
  state.FavoriteCityReducer.favorites;
