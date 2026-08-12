import { useReducer } from "react";
import { initialState, reducer } from "./helpers/reducer.ts";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <main className="lg:container mx-auto h-screen flex flex-col lg:border-solid lg:border-[#E5E7EB] lg:border lg:rounded-md lg:backdrop-blur-sm">
      <ThemeButton />
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
