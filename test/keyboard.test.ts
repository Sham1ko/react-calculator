import { mapKeyToAction } from "../src/helpers/keyboard";
import { ACTIONS } from "../src/helpers/constants";

function key(overrides: Partial<{ key: string; ctrlKey: boolean; metaKey: boolean; altKey: boolean }>) {
  return { key: "", ctrlKey: false, metaKey: false, altKey: false, ...overrides };
}

describe("mapKeyToAction", () => {
  test("maps digit keys to ADD_DIGIT", () => {
    expect(mapKeyToAction(key({ key: "7" }))).toEqual({
      action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "7" } },
      buttonKey: "digit-7",
    });
  });

  test("maps '.' to a decimal point ADD_DIGIT", () => {
    expect(mapKeyToAction(key({ key: "." }))).toEqual({
      action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "." } },
      buttonKey: "digit-.",
    });
  });

  test("maps ',' to a decimal point ADD_DIGIT", () => {
    expect(mapKeyToAction(key({ key: "," }))).toEqual({
      action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "." } },
      buttonKey: "digit-.",
    });
  });

  test("maps '+' to the '+' operator", () => {
    expect(mapKeyToAction(key({ key: "+" }))).toEqual({
      action: { type: ACTIONS.CHOOSE_OPERATOR, payload: { operation: "+" } },
      buttonKey: "op-+",
    });
  });

  test("maps '-' to the '-' operator", () => {
    expect(mapKeyToAction(key({ key: "-" }))).toEqual({
      action: { type: ACTIONS.CHOOSE_OPERATOR, payload: { operation: "-" } },
      buttonKey: "op--",
    });
  });

  test("maps '*' to the 'x' operator", () => {
    expect(mapKeyToAction(key({ key: "*" }))).toEqual({
      action: { type: ACTIONS.CHOOSE_OPERATOR, payload: { operation: "x" } },
      buttonKey: "op-x",
    });
  });

  test("maps '/' to the '÷' operator", () => {
    expect(mapKeyToAction(key({ key: "/" }))).toEqual({
      action: { type: ACTIONS.CHOOSE_OPERATOR, payload: { operation: "÷" } },
      buttonKey: "op-÷",
    });
  });

  test("maps 'Enter' to EVALUATE", () => {
    expect(mapKeyToAction(key({ key: "Enter" }))).toEqual({
      action: { type: ACTIONS.EVALUATE, payload: undefined },
      buttonKey: "evaluate",
    });
  });

  test("maps '=' to EVALUATE", () => {
    expect(mapKeyToAction(key({ key: "=" }))).toEqual({
      action: { type: ACTIONS.EVALUATE, payload: undefined },
      buttonKey: "evaluate",
    });
  });

  test("maps 'Backspace' to DELETE_DIGIT", () => {
    expect(mapKeyToAction(key({ key: "Backspace" }))).toEqual({
      action: { type: ACTIONS.DELETE_DIGIT, payload: undefined },
      buttonKey: "delete",
    });
  });

  test("maps 'Escape' to CLEAR", () => {
    expect(mapKeyToAction(key({ key: "Escape" }))).toEqual({
      action: { type: ACTIONS.CLEAR, payload: undefined },
      buttonKey: "clear",
    });
  });

  test("ignores digit keys when Ctrl is held", () => {
    expect(mapKeyToAction(key({ key: "7", ctrlKey: true }))).toBeNull();
  });

  test("ignores keys when Meta (Cmd) is held", () => {
    expect(mapKeyToAction(key({ key: "r", metaKey: true }))).toBeNull();
  });

  test("ignores keys when Alt is held", () => {
    expect(mapKeyToAction(key({ key: "+", altKey: true }))).toBeNull();
  });

  test("returns null for unrecognized keys", () => {
    expect(mapKeyToAction(key({ key: "Tab" }))).toBeNull();
    expect(mapKeyToAction(key({ key: "F5" }))).toBeNull();
    expect(mapKeyToAction(key({ key: "a" }))).toBeNull();
  });
});
