import { deleteDigit } from "../src/helpers/actions/delete-digit";

describe("deleteDigit", () => {
  test("clears the overwritten operand and turns overwrite off, without deleting a character", () => {
    const state = { currentOperand: "12", previousOperand: null, operation: null, overwrite: true };
    expect(deleteDigit(state)).toEqual({ ...state, currentOperand: "0", overwrite: false });
  });

  test("resets a single digit back to '0'", () => {
    const state = { currentOperand: "5", previousOperand: null, operation: null, overwrite: false };
    expect(deleteDigit(state)).toEqual({ ...state, currentOperand: "0" });
  });

  test("removes the last character of a multi-digit operand with no pending operation", () => {
    const state = { currentOperand: "12", previousOperand: null, operation: null, overwrite: false };
    expect(deleteDigit(state)).toEqual({ ...state, currentOperand: "1" });
  });

  test("removes the last character of a multi-digit operand while an operation is pending", () => {
    const state = { currentOperand: "12", previousOperand: "5", operation: "+", overwrite: false };
    expect(deleteDigit(state)).toEqual({ ...state, currentOperand: "1" });
  });
});
