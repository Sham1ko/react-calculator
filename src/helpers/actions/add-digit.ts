import { StateType } from "../types";

const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const MAX_LENGTH = 15; // Ограничение на максимальную длину числа

export function addDigit(
  state: StateType,
  payload: { digit?: string } | undefined
) {
  // Если нужно перезаписать текущее значение
  if (state.overwrite) {
    return {
      ...state,
      currentOperand: payload?.digit,
      overwrite: false,
    };
  }

  // Предотвращаем ввод нескольких нулей в начале
  if (payload?.digit === "0" && state.currentOperand === "0") {
    return state;
  }

  // Предотвращаем ввод более одной десятичной точки
  if (payload?.digit === "." && state.currentOperand.includes(".")) {
    return state;
  }

  // Ограничиваем длину числа
  if (state.currentOperand.length >= MAX_LENGTH) {
    return state;
  }

  // Обновляем текущее число
  const newOperand = `${state.currentOperand || ""}${payload?.digit}`;

  // Проверяем, чтобы число оставалось в пределах безопасного диапазона
  if (Number(newOperand) > MAX_SAFE_INTEGER) {
    return state;
  }

  return {
    ...state,
    currentOperand: newOperand,
  };
}
