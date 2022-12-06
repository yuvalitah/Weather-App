import { UnitReducer } from "./UnitReducer";
import { FavoriteCityReducer } from "./FavoriteCityReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "rootReducer",
  storage,
};

const rootReducer = combineReducers({ FavoriteCityReducer, UnitReducer });
export default persistReducer(persistConfig, rootReducer);
