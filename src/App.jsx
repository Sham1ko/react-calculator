/* eslint-disable no-unreachable */
import { useReducer } from "react";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";


const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATOR: 'choose-operator',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
  CHANGE_SIGN: 'change-sign',
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }

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
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: 0,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: 0 }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "x":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
  }

  return computation.toString()
}




function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

  return (
    <>
      <div className="container mx-auto h-screen">
        <Display currentOperand={currentOperand} previousOperand={previousOperand} operation={operation} />
        <Buttons dispatch={dispatch} />
      </div>
    </>

  );
}

export default App;
