import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "../reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) =>
    // Needed to exclude the middleware of serializableCheck because it's not working well with redux-persist
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
