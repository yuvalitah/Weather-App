import { UNIT_ACTIONS, WEATHER_FAVORITES_ACTIONS } from "./Actions";
import { IFavoriteCity } from "../../interfaces";

interface IAddFavoriteCityActionType {
  type: typeof WEATHER_FAVORITES_ACTIONS.ADD_FAVORITE_CITY;
  payload: IFavoriteCity;
}

interface IRemoveFavoriteCityActionType {
  type: typeof WEATHER_FAVORITES_ACTIONS.REMOVE_FAVORITE_CITY;
  payload: number;
}

interface ISetUnitActionType {
  type: typeof UNIT_ACTIONS.SET_UNIT;
  payload: string;
}

export type FavoriteCityActionTypes =
  | IAddFavoriteCityActionType
  | IRemoveFavoriteCityActionType;
export type SetUnitActionType = ISetUnitActionType;
