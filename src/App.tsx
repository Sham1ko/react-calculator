import { useReducer } from "react";
import { initialState, reducer } from "./helpers/reducer.ts";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log("currentOperand", currentOperand);
  console.log("previousOperand", previousOperand);
  console.log("operation", operation);
  return (
    <main className="lg:container mx-auto h-screen flex flex-col lg:border-solid lg:border-[#E5E7EB] lg:border lg:rounded-md lg:backdrop-blur-sm">
      <Display
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
      />
      <Buttons dispatch={dispatch} />
    </main>
  );
}

export default App;
