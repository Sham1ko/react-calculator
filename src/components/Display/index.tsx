import { getDisplayFontSizeClass } from "../../helpers/display";

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: undefined,
});

function formatOperand(operand: string | number | null) {
  if (operand == null) return;
  const [integer, decimal] = operand.toString().split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(parseInt(integer));
  return `${INTEGER_FORMATTER.format(parseInt(integer))}.${decimal}`;
}

type DisplayType = {
  currentOperand?: string | number | null;
  previousOperand?: string | number | null;
  operation?: string | null;
};

function Display({
  currentOperand = "0",
  previousOperand = null,
  operation = null,
}: DisplayType) {
  const previousText = formatOperand(previousOperand) ?? "";
  const currentText = formatOperand(currentOperand) ?? "";
  const previousLineFontSize = getDisplayFontSizeClass(previousText.length);
  const currentLineFontSize = getDisplayFontSizeClass(currentText.length);

  return (
    <div className="text-right flex flex-col mx-6 mt-10 rounded-md border border-input h-1/3 p-6 justify-center overflow-hidden">
      {previousText && (
        <div className={`${previousLineFontSize} truncate`}>{previousText}</div>
      )}
      {operation && (
        <div className="text-left text-6xl text-red-500">{operation}</div>
      )}
      <div className={`${currentLineFontSize} truncate`}>{currentText}</div>
    </div>
  );
}

export default Display;
