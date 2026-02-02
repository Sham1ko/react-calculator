import PropTypes from "prop-types";
import DigitButton from "../DigitButton";
import OperationButton from "../OperationButton";
import { ACTIONS } from "../../helpers/constants";
import { Button } from "../ui/button";

type ButtonsType = {
  dispatch: React.Dispatch<{
    type: string;
    payload:
      | {
          operation?: string | undefined;
          digit?: string | undefined;
        }
      | undefined;
  }>;
};

function Buttons({ dispatch }: ButtonsType) {
  return (
    <div className="flex-1 flex flex-col justify-between m-10 gap-y-2">
      <div className="grid grid-cols-4 gap-2 h-1/5">
        <Button
          onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: undefined })}
          className="w-full h-full text-2xl"
        >
          AC
        </Button>
        <Button
          onClick={() =>
            dispatch({ type: ACTIONS.CHANGE_SIGN, payload: undefined })
          }
          className="w-full h-full text-2xl"
        >
          ±
        </Button>
        <Button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_DIGIT, payload: undefined })
          }
          className="w-full h-full text-2xl"
        >
          DEL
        </Button>
        <OperationButton operation="÷" dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4 gap-2 h-1/5">
        <DigitButton digit={"7"} dispatch={dispatch} />
        <DigitButton digit={"8"} dispatch={dispatch} />
        <DigitButton digit={"9"} dispatch={dispatch} />
        <OperationButton operation={"x"} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4 gap-2 h-1/5">
        <DigitButton digit={"4"} dispatch={dispatch} />
        <DigitButton digit={"5"} dispatch={dispatch} />
        <DigitButton digit={"6"} dispatch={dispatch} />
        <OperationButton operation={"-"} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4 gap-2 h-1/5">
        <DigitButton digit={"1"} dispatch={dispatch} />
        <DigitButton digit={"2"} dispatch={dispatch} />
        <DigitButton digit={"3"} dispatch={dispatch} />
        <OperationButton operation={"+"} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4 gap-2 h-1/5">
        <DigitButton digit={"0"} dispatch={dispatch} isZero />
        <DigitButton digit={"."} dispatch={dispatch} />
        <Button
          variant="destructive"
          onClick={() =>
            dispatch({ type: ACTIONS.EVALUATE, payload: undefined })
          }
          className="w-full h-full"
        >
          =
        </Button>
      </div>
    </div>
  );
}

Buttons.propTypes = {
  dispatch: PropTypes.func,
};

export default Buttons;
