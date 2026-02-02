import { StateType } from "../types";

// Функция для выполнения арифметических операций
function evaluate({ currentOperand, previousOperand, operation }: StateType) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  // Проверка на валидность операндов
  if (isNaN(prev) || isNaN(current)) return "";

  let computation: number = 0;

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
      // Проверка деления на ноль
      if (current === 0) {
        return "Error: Division by zero";
      }
      computation = prev / current;
      break;
    default:
      return ""; // Если операция неизвестна
  }

  // Приведение результата к 8 знакам после запятой и преобразование в строку
  return (+computation.toFixed(8)).toString();
}

// Функция для вычисления результата и обновления состояния
export function calculateResult(state: StateType) {
  // Проверка на наличие необходимых данных для вычисления
  if (
    state.operation == null ||
    state.currentOperand == null ||
    state.previousOperand == null
  ) {
    return state; // Если чего-то не хватает, возвращаем текущее состояние
  }

  // Обновляем состояние после вычисления
  return {
    ...state,
    overwrite: true,
    previousOperand: null,
    operation: null,
    currentOperand: evaluate(state), // Вызываем evaluate для получения результата
  };
}

// export { evaluate, calculateResult };
