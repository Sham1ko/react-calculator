import { evaluate } from "../src/helpers/functions";

describe("evaluate", () => {
  test("should return 0 when previousOperand is 0, currentOperand is 0, and operation is +", () => {
    const state = {
      previousOperand: "0",
      currentOperand: "0",
      operation: "+",
    };
    expect(evaluate(state)).toBe("0");
  });

  test("should return 2 when previousOperand is 1, currentOperand is 1, and operation is +", () => {
    const state = {
      previousOperand: "1",
      currentOperand: "1",
      operation: "+",
    };
    expect(evaluate(state)).toBe("2");
  });

  test("should return 0 when previousOperand is 1, currentOperand is 1, and operation is -", () => {
    const state = {
      previousOperand: "1",
      currentOperand: "1",
      operation: "-",
    };
    expect(evaluate(state)).toBe("0");
  });

  test("should return 1 when previousOperand is 1, currentOperand is 1, and operation is x", () => {
    const state = {
      previousOperand: "1",
      currentOperand: "1",
      operation: "x",
    };
    expect(evaluate(state)).toBe("1");
  });

  test("should return 4 when previousOperand is 2, currentOperand is 2, and operation is x", () => {
    const state = {
      previousOperand: "2",
      currentOperand: "2",
      operation: "x",
    };
    expect(evaluate(state)).toBe("4");
  });

  test("should return 1 when previousOperand is 2, currentOperand is 2, and operation is ÷", () => {
    const state = {
      previousOperand: "2",
      currentOperand: "2",
      operation: "÷",
    };
    expect(evaluate(state)).toBe("1");
  });
});
