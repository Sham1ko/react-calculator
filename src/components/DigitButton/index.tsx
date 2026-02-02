import { ACTIONS } from "../../helpers/constants";
import { Button } from "../ui/button";
import clsx from "clsx"; // Это помогает аккуратно объединять классы

type DigitButtonType = {
  digit: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: {
      digit: string;
    };
  }>;
  isZero?: boolean;
  className?: string; // Проп для передачи дополнительных классов
};

const DigitButton = ({
  digit,
  dispatch,
  isZero,
  className,
}: DigitButtonType) => {
  return (
    <Button
      variant={"outline"}
      className={clsx(
        isZero
          ? "col-span-2  text-2xl w-full h-full"
          : "text-2xl w-full h-full",
        className
      )} // Объединяем классы через clsx
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
};

export default DigitButton;
