import { UNIT_ACTIONS, WEATHER_FAVORITES_ACTIONS } from "./Actions";
import { SetUnitActionType, FavoriteCityActionTypes } from "./ActionTypes";
import { IFavoriteCity } from "../../interfaces";

export const addFavoriteCityAction = (
  payload: IFavoriteCity
): FavoriteCityActionTypes => ({
  type: WEATHER_FAVORITES_ACTIONS.ADD_FAVORITE_CITY,
  payload,
});

export const removeFavoriteCityAction = (
  id: number
): FavoriteCityActionTypes => ({
  type: WEATHER_FAVORITES_ACTIONS.REMOVE_FAVORITE_CITY,
  payload: id,
});

export const setUnitAction = (unit: string): SetUnitActionType => ({
  type: UNIT_ACTIONS.SET_UNIT,
  payload: unit,
});
