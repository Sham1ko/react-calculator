import { useReducer } from "react";
import { initialState, reducer } from "./helpers/reducer.ts";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <main className="container mx-auto ">
      <section className="sm:mx-2 border-solid border-[#E5E7EB] border my-10 rounded-md backdrop-blur-sm">
        <Display
          currentOperand={currentOperand}
          previousOperand={previousOperand}
          operation={operation}
        />
        <Buttons dispatch={dispatch} />
      </section>
    </main>
  );
}

export default App;
