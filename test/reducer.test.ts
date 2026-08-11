import { reducer, initialState } from "../src/helpers/reducer";
import { ACTIONS } from "../src/helpers/constants";

describe("reducer division by zero", () => {
  test("EVALUATE ('=') surfaces a division by zero error", () => {
    const state = {
      ...initialState,
      previousOperand: "5",
      currentOperand: "0",
      operation: "÷",
    };
    const result = reducer(state, { type: ACTIONS.EVALUATE, payload: undefined });
    expect(result.currentOperand).toBe("Error: Division by zero");
  });
});

describe("reducer CHOOSE_OPERATOR currentOperand type", () => {
  test("resets currentOperand to the string '0' (not the number 0) when picking the first operator", () => {
    const state = { ...initialState, currentOperand: "5", overwrite: false };
    const result = reducer(state, {
      type: ACTIONS.CHOOSE_OPERATOR,
      payload: { operation: "+" },
    });
    expect(result.currentOperand).toBe("0");
    expect(typeof result.currentOperand).toBe("string");
  });

  test("resets currentOperand to the string '0' (not the number 0) after evaluating a chained operator", () => {
    const state = {
      currentOperand: "3",
      previousOperand: "5",
      operation: "÷",
      overwrite: false,
    };
    const result = reducer(state, {
      type: ACTIONS.CHOOSE_OPERATOR,
      payload: { operation: "+" },
    });
    expect(result.currentOperand).toBe("0");
    expect(typeof result.currentOperand).toBe("string");
  });

  test("typing '.' right after choosing an operator does not crash", () => {
    const afterOperator = reducer(
      { ...initialState, currentOperand: "5", overwrite: false },
      { type: ACTIONS.CHOOSE_OPERATOR, payload: { operation: "+" } }
    );
    expect(() =>
      reducer(afterOperator, {
        type: ACTIONS.ADD_DIGIT,
        payload: { digit: "." },
      })
    ).not.toThrow();
  });
});
