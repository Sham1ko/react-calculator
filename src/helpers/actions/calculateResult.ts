import { evaluate } from "../functions";

export function calculateResult(state: StateType) {
  if (
    state.operation == null ||
    state.currentOperand == null ||
    state.previousOperand == null
  ) {
    return state;
  }

  return {
    ...state,
    overwrite: true,
    previousOperand: null,
    operation: null,
    currentOperand: evaluate(state),
  };
}
