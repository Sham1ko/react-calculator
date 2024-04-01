import { useReducer } from "react";
import { initialState, reducer } from "./helpers/reducer.ts";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { Button } from "./components/ui/button.tsx";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     const { key } = event;
  //     console.log(key);
  //     if (
  //       !isNaN(+key) ||
  //       key === "." ||
  //       key === "+" ||
  //       key === "-" ||
  //       key === "*" ||
  //       key === "/"
  //     ) {
  //       dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: key } });
  //     } else if (key === "Enter") {
  //       dispatch({ type: ACTIONS.EVALUATE });
  //     } else if (key === "Backspace") {
  //       dispatch({ type: ACTIONS.DELETE_DIGIT });
  //     } else if (key === "Escape") {
  //       dispatch({ type: ACTIONS.CLEAR });
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <>
      <main className="container mx-auto ">
        <Button>Hi</Button>
        <section className="sm:mx-2 border-solid border-[#E5E7EB] border my-10 rounded-md backdrop-blur-sm">
          <Display
            currentOperand={currentOperand}
            previousOperand={previousOperand}
            operation={operation}
          />
          <Buttons dispatch={dispatch} />
        </section>
      </main>
    </>
  );
}

export default App;
