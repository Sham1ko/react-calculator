import PropTypes from 'prop-types';
import { ACTIONS } from '../../helpers/constants';

const OperationButton = ({ operation, dispatch }) => {
    return (
        <button className="bg-blue-500 text-white font-semibold rounded-lg p-4 m-1 hover:bg-blue-600 transition-all text-4xl h-24"
            onClick={() =>
                dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
            }>
            {operation}
        </button>
    );
};

OperationButton.propTypes = {
    operation: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
}

export default OperationButton;
