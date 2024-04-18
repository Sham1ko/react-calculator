import "./index.css";

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
  currentOperand: string | number | null;
  previousOperand: string | number | null;
  operation: string | null;
};

function Display({ currentOperand, previousOperand, operation }: DisplayType) {
  return (
    <div className="text-right flex flex-col m-10 rounded-md border border-[#CBD5E1] h-34 p-10 justify-around">
      <div className="text-8xl ">
        {" "}
        {formatOperand(previousOperand)}{" "}
        <span className="text-red-500">{operation}</span>{" "}
        {formatOperand(currentOperand)}
      </div>
    </div>
  );
}

Display.defaultProps = {
  currentOperand: "0",
  previousOperand: null,
  operation: null,
};

export default Display;
