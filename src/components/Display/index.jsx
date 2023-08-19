import PropTypes from 'prop-types';
import "./index.css";

function Display({ currentOperand, previousOperand, operation }) {
  return (
    <div className="text-right flex flex-col border-b-2 h-80 py-10 justify-around">
      <div className="text-5xl opacity-80">20 <span className='text-red-500'>×</span> 20</div>
      <div className="text-8xl font-bold">40</div>
    </div>)
}

Display.defaultProps = {
  currentOperand: "0",
  previousOperand: "",
  operation: "",
}

Display.propTypes = {
  currentOperand: PropTypes.string.isRequired,
  previousOperand: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
}

export default Display;
