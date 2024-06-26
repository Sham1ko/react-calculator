import PropTypes from "prop-types";
import { ACTIONS } from "../../helpers/constants";
import { Button } from "../ui/button";

type OperationButtonType = {
  operation: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: {
      operation: string;
    };
  }>;
};

const OperationButton = ({ operation, dispatch }: OperationButtonType) => {
  return (
    <Button
      // className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-4xl font-semibold"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operation } })
      }
    >
      {operation}
    </Button>
  );
};

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
};

export default OperationButton;
