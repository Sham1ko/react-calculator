import { StateType } from "./types";

function evaluate({ currentOperand, previousOperand, operation }: StateType) {
  const prev = parseFloat(previousOperand ?? "");
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
      if (current === 0) return "Error: Division by zero";
      computation = prev / current;
      break;
    default:
      return "";
  }
  return (+computation.toFixed(8)).toString();
}

export { evaluate };
