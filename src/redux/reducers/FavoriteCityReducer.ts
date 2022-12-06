import { AnyAction } from "@reduxjs/toolkit";
import { WEATHER_FAVORITES_ACTIONS } from "../actions";
import { IFavoriteCity } from "../../interfaces";

interface IFavoriteCityState {
  favorites: IFavoriteCity[];
}

const initialState: IFavoriteCityState = {
  favorites: [],
};

export const FavoriteCityReducer = (
  state: IFavoriteCityState = initialState,
  action: AnyAction
): IFavoriteCityState => {
  switch (action.type) {
    case WEATHER_FAVORITES_ACTIONS.ADD_FAVORITE_CITY:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case WEATHER_FAVORITES_ACTIONS.REMOVE_FAVORITE_CITY:
      return {
        ...state,
        favorites: state.favorites.filter((city) => city.id !== action.payload),
      };

    default:
      return state;
  }
};
