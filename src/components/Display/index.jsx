import "./index.css";

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: null,
})

function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.toString().split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function Display({ currentOperand, previousOperand, operation }) {
  return (
    <div className="text-right flex flex-col border-b-2 h-72 py-10 justify-around">
      <div className="text-8xl opacity-80"> {formatOperand(previousOperand)}  <span className='text-red-500'>{operation}</span> {formatOperand(currentOperand)}</div>
    </div>)
}

Display.defaultProps = {
  currentOperand: "0",
  previousOperand: null,
  operation: null,
}


export default Display;
