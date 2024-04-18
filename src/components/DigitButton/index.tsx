import { ACTIONS } from "../../helpers/constants";
import { Button } from "../ui/button";

type DigitButtonType = {
  digit: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: {
      digit: string;
    };
  }>;
  isZero?: boolean;
};

const DigitButton = ({ digit, dispatch, isZero }: DigitButtonType) => {
  return (
    <Button
      variant={"outline"}
      className={isZero ? "col-span-2" : ""}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
};

export default DigitButton;
