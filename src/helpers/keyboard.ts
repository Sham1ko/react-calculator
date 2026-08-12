import { ACTIONS } from "./constants";
import { ActionType } from "./reducer";

export type KeyboardActionResult = {
  action: ActionType;
  buttonKey: string;
};

type KeyLike = {
  key: string;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
};

const DIGIT_KEYS = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

const OPERATOR_KEYS: Record<string, string> = {
  "+": "+",
  "-": "-",
  "*": "x",
  "/": "÷",
};

export function mapKeyToAction(event: KeyLike): KeyboardActionResult | null {
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return null;
  }

  const { key } = event;

  if (DIGIT_KEYS.has(key)) {
    return {
      action: { type: ACTIONS.ADD_DIGIT, payload: { digit: key } },
      buttonKey: `digit-${key}`,
    };
  }

  if (key === "." || key === ",") {
    return {
      action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "." } },
      buttonKey: "digit-.",
    };
  }

  if (key in OPERATOR_KEYS) {
    const operation = OPERATOR_KEYS[key];
    return {
      action: { type: ACTIONS.CHOOSE_OPERATOR, payload: { operation } },
      buttonKey: `op-${operation}`,
    };
  }

  if (key === "Enter" || key === "=") {
    return {
      action: { type: ACTIONS.EVALUATE, payload: undefined },
      buttonKey: "evaluate",
    };
  }

  if (key === "Backspace") {
    return {
      action: { type: ACTIONS.DELETE_DIGIT, payload: undefined },
      buttonKey: "delete",
    };
  }

  if (key === "Escape") {
    return {
      action: { type: ACTIONS.CLEAR, payload: undefined },
      buttonKey: "clear",
    };
  }

  return null;
}
