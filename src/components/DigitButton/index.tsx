import PropTypes from 'prop-types';
import { ACTIONS } from '../../helpers/constants';

const DigitButton = ({ digit, dispatch }) => {
  return (
    <button className="bg-blue-500 text-white font-semibold rounded-lg p-4 hover:bg-blue-600 transition-all text-4xl h-24"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
