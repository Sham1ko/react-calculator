/* eslint-disable no-unreachable */
import { useReducer } from "react";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import ThemeButton from "./components/ThemeButton";


const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATOR: 'choose-operator',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === 0 && state.currentOperand === "0") return state;

      if (payload.digit === "." && state.currentOperand.includes(".")) return state;

      return {
        ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`
      };
    case ACTIONS.CLEAR:
      return {};
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})


  return (
    <>
      {/* <ThemeButton /> */}
      <div className="container mx-auto h-screen">
        <Display currentOperand={currentOperand} previousOperand={previousOperand} operation={operation} />
        <Buttons dispatch={dispatch} />
      </div>
    </>

  );
}

export default App;
