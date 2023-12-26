import PropTypes from 'prop-types';
import DigitButton from "../DigitButton";
import OperationButton from "../OperationButton";
import { ACTIONS } from '../../helpers/constants';

function Buttons({ dispatch }) {
  return (
    <div className="flex flex-col justify-between w-1/2 mx-auto">
      <div className="grid grid-cols-4 ">
        <button className="bg-blue-500 text-white font-semibold rounded-lg p-4 m-1 hover:bg-blue-600 transition-all text-4xl h-24" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
          AC
        </button>
        <button className='bg-blue-500 text-white font-semibold rounded-lg p-4 m-1 hover:bg-blue-600 transition-all text-4xl h-24' onClick={() => dispatch({ type: ACTIONS.CHANGE_SIGN })}>±</button>
        <button className='bg-blue-500 text-white font-semibold rounded-lg p-4 m-1 hover:bg-blue-600 transition-all text-4xl h-24' onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <OperationButton operation="÷" dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4">
        <DigitButton digit={7} dispatch={dispatch} />
        <DigitButton digit={8} dispatch={dispatch} />
        <DigitButton digit={9} dispatch={dispatch} />
        <OperationButton operation={"x"} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4">
        <DigitButton digit={4} dispatch={dispatch} />
        <DigitButton digit={5} dispatch={dispatch} />
        <DigitButton digit={6} dispatch={dispatch} />
        <OperationButton operation={"-"} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4">
        <DigitButton digit={1} dispatch={dispatch} />
        <DigitButton digit={2} dispatch={dispatch} />
        <DigitButton digit={3} dispatch={dispatch} />
        <OperationButton operation={"+"} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4">
        <DigitButton digit={0} dispatch={dispatch} />
        <DigitButton digit={'.'} dispatch={dispatch} />
        <button className='bg-orange-400 text-black rounded-none  font-semibold  p-4 m-1 hover:bg-blue-600 transition-all text-4xl  h-24' onClick={() => dispatch({ type: ACTIONS.EVALUATE })} >=</button>
      </div>
    </div>
  );
}

Buttons.propTypes = {
  dispatch: PropTypes.func,
}

export default Buttons;
