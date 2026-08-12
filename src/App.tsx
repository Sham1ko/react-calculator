import { useReducer } from "react";
import { initialState, reducer } from "./helpers/reducer.ts";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import ThemeButton from "./components/ThemeButton";
import GithubButton from "./components/GithubButton";
import { useKeyboardInput } from "./hooks/useKeyboardInput";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useKeyboardInput(dispatch);

  return (
    <main className="mx-auto h-screen flex flex-col lg:max-w-md lg:border-solid lg:border-input lg:border-x lg:backdrop-blur-sm">
      <div className="fixed top-5 left-0 right-0 flex justify-center gap-3">
        <ThemeButton />
        <GithubButton />
      </div>
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
