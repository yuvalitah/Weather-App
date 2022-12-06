import { RootState } from "../store";

export const unitSelector = (state: RootState): string =>
  state.UnitReducer.unit;
