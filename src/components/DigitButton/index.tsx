import { ACTIONS } from "../../helpers/constants";
import { Button } from "../ui/button";

type DigitButtonProps = {
  digit: number | string;
  dispatch: React.Dispatch<{ type: string; payload: any }>;
  isZero?: boolean;
};

const DigitButton = ({ digit, dispatch, isZero }: DigitButtonProps) => {
  return (
    <Button
      variant={"outline"}
      // className="bg-blue-500 text-white font-semibold rounded-lg p-4 hover:bg-blue-600 transition-all text-4xl h-24"
      className={isZero ? "col-span-2" : ""}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
};

export default DigitButton;
