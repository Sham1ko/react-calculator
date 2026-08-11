export type StateType = {
  currentOperand: string;
  previousOperand: string | null;
  operation: string | null | undefined;
  overwrite?: boolean | undefined;
};
