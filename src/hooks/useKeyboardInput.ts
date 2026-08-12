import { useEffect } from "react";
import { mapKeyToAction } from "../helpers/keyboard";
import { ActionType } from "../helpers/reducer";

export function useKeyboardInput(dispatch: React.Dispatch<ActionType>): void {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const result = mapKeyToAction(event);
      if (!result) return;
      event.preventDefault();
      dispatch(result.action);
      const button = document.querySelector(`[data-key="${result.buttonKey}"]`);
      button?.classList.add("keyboard-active");
    }

    function handleKeyUp(event: KeyboardEvent) {
      const result = mapKeyToAction(event);
      if (!result) return;
      const button = document.querySelector(`[data-key="${result.buttonKey}"]`);
      button?.classList.remove("keyboard-active");
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dispatch]);
}
