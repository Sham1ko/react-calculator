import { useEffect, useReducer } from "react";
import "./App.css";
import { ACTIONS, initialState, reducer } from "./reducer";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Background from "./components/Background";



function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: key } });
      } else if (key === 'Enter') {
        dispatch({ type: ACTIONS.EVALUATE });
      } else if (key === 'Backspace') {
        dispatch({ type: ACTIONS.DELETE_DIGIT });
      } else if (key === 'Escape') {
        dispatch({ type: ACTIONS.CLEAR });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <main className="">
        <section className="container mx-auto h-full border-solid border-[#E5E7EB] border my-10 rounded-md backdrop-blur-sm">
          <Display currentOperand={currentOperand} previousOperand={previousOperand} operation={operation} />
          <Buttons dispatch={dispatch} />
        </section>
        <Background />
      </main>
    </>

  );
}

export default App;
