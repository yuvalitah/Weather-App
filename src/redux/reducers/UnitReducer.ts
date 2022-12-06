import { AnyAction } from "@reduxjs/toolkit";
import { UNIT_ACTIONS } from "../actions";

interface IUnitState {
  unit: string;
}

const initialState: IUnitState = {
  unit: "metric",
};

export const UnitReducer = (
  state: IUnitState = initialState,
  action: AnyAction
): IUnitState => {
  switch (action.type) {
    case UNIT_ACTIONS.SET_UNIT:
      return {
        ...state,
        unit: action.payload,
      };

    default:
      return state;
  }
};
