export function deleteDigit(state: StateType) {
  if (state.overwrite) {
    return {
      ...state,
      overwrite: false,
      currentOperand: "0",
    };
  }
  if (state.currentOperand == null || 0) {
    return state;
  }
  if (state.currentOperand.length === 1) {
    return { ...state, currentOperand: "0" };
  }

  if (state.operation != null) {
    return {
      ...state,
      currentOperand: state.currentOperand.slice(0, -1),
    };
  }

  return {
    ...state,
    currentOperand: state.currentOperand.slice(0, -1),
  };
}
