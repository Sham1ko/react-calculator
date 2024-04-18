import { StateType } from "../types";

export function addDigit(
  state: StateType,
  payload: { digit?: string } | undefined
) {
  if (state.overwrite) {
    return {
      ...state,
      currentOperand: payload?.digit,
      overwrite: false,
    };
  }
  if (payload?.digit === "0" && state.currentOperand === "0") {
    console.log(state);
    return state;
  }
  if (payload?.digit === "." && state.currentOperand.includes(".")) {
    return state;
  }

  return {
    ...state,
    currentOperand: `${state.currentOperand || ""}${payload?.digit}`,
  };
}
