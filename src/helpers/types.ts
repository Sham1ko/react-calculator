export type StateType = {
  currentOperand: number;
  previousOperand: number;
  operation: string | null | undefined;
  overwrite?: boolean | undefined;
};
