export function addDigit(state: StateType, payload: { digit: string }) {
  if (state.overwrite) {
    return {
      ...state,
      currentOperand: payload.digit,
      overwrite: false,
    };
  }
  if (payload.digit === "0" && state.currentOperand === "0") {
    return state;
  }
  if (payload.digit === "." && state.currentOperand.includes(".")) {
    return state;
  }

  return {
    ...state,
    currentOperand: `${state.currentOperand || ""}${payload.digit}`,
  };
}
