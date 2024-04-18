import { StateType } from "../types";

export function changeSign(state: StateType) {
  if (state.currentOperand != null) {
    const newOperand = (parseFloat(state.currentOperand) * -1).toString();
    return {
      ...state,
      currentOperand: newOperand,
    };
  }
  return state;
}
