import { StateType } from "../types";

export function deleteDigit(state: StateType) {
  if (state.overwrite) {
    return {
      ...state,
      overwrite: false,
      currentOperand: "0",
    };
  }
  if (state.currentOperand.length === 1) {
    return { ...state, currentOperand: "0" };
  }

  return {
    ...state,
    currentOperand: state.currentOperand.slice(0, -1),
  };
}
