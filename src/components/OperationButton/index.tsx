import PropTypes from "prop-types";
import { ACTIONS } from "../../helpers/constants";
import { ActionType } from "../../helpers/reducer";
import { Button } from "../ui/button";
import clsx from "clsx";

type OperationButtonType = {
  operation: string;
  dispatch: React.Dispatch<ActionType>;
  className?: string; // Проп для передачи дополнительных классов
};

const OperationButton = ({
  operation,
  dispatch,
  className,
}: OperationButtonType) => {
  return (
    <Button
      data-key={`op-${operation}`}
      className={clsx("size-1/4 text-2xl w-full h-full", className)} // Объединение базового класса и переданных классов
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
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string, // Описание нового пропа
};

export default OperationButton;
