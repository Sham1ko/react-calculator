import PropTypes from 'prop-types';
import { ACTIONS } from '../../helpers/constants';

const DigitButton = ({ operation, dispatch }) => {
    return (
        <button className="bg-blue-500 text-white font-semibold rounded-md p-4 m-1 hover:bg-blue-600 transition-all
    hover:bg-blue-700 
    "
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { operation } })}
        >
            {operation}
        </button>
    );
};

DigitButton.propTypes = {
    operation: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
}

export default DigitButton;
