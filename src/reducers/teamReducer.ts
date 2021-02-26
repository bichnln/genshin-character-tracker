import "../actions/teamActions";
import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  TeamActionType,
} from "../actions/teamActionTypes";
import "../actions/teamState";
import { ITeamState } from "../actions/teamState";

const initialState: ITeamState = {
  owned: 0,
  total: 30,
};

export function teamReducer(state = initialState, action: TeamActionType) {
  switch (action.type) {
    case ADD_CHARACTER: {
      if (state.owned < state.total) {
        const newQty = state.owned + 1;
        return {
          ...state,
          owned: newQty,
        };
      }
      return {
        ...state,
      };
    }
    case REMOVE_CHARACTER: {
      if (state.owned > 0) {
        const newQty = state.owned - 1;
        return {
          ...state,
          owned: newQty,
        };
      }
      return {
        ...state,
      };
    }
    default:
       return {
          ...state
       }
  }
}
