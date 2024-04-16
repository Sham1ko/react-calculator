import { ACTIONS } from "./constants";

type StateType = {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
  overwrite: boolean;
};

export const initialState = {
  currentOperand: "0",
  previousOperand: null,
  operation: null,
  overwrite: true,
};

function evaluate({ currentOperand, previousOperand, operation }: StateType) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = 0;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }

  return computation.toString();
}

type ActionType = {
  type: string;
  payload: any;
};

export function reducer(state: StateType, { type, payload }: ActionType): any {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
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
    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CHANGE_SIGN:
      if (state.currentOperand != null) {
        const newOperand = (parseFloat(state.currentOperand) * -1).toString();
        return {
          ...state,
          currentOperand: newOperand,
        };
      }
      return state;
    case ACTIONS.CLEAR:
      return {
        currentOperand: "0",
        previousOperand: null,
        operation: null,
        overwrite: true,
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: 0,
        };
      }
      if (state.currentOperand == null || 0) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: 0 };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
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
}
