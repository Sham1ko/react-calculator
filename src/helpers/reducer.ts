import {
  addDigit,
  changeSign,
  clear,
  deleteDigit,
  calculateResult,
} from "./actions";
import { ACTIONS } from "./constants";
import { evaluate } from "./functions";
import { StateType } from "./types";

export const initialState = {
  currentOperand: "0",
  previousOperand: null,
  operation: null,
  overwrite: true,
};

type ActionType = {
  type: string;
  payload:
    | {
        operation?: string | undefined;
        digit?: string | undefined;
      }
    | undefined;
};

export function reducer(state: StateType, { type, payload }: ActionType): any {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return addDigit(state, payload);
    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload?.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload?.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload?.operation,
        currentOperand: null,
      };

    case ACTIONS.CHANGE_SIGN:
      return changeSign(state);
    case ACTIONS.CLEAR:
      return clear();
    case ACTIONS.DELETE_DIGIT:
      return deleteDigit(state);
    case ACTIONS.EVALUATE:
      return calculateResult(state);
  }
}
