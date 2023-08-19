import PropTypes from 'prop-types';
import DigitButton from "../DigitButton";

function Buttons({ dispatch }) {
  return (
    //can you make this div until bottom of the page?
    <div className="w-full">
      <div className="grid grid-cols-4">
        <DigitButton digit={1} dispatch={dispatch} />
        <DigitButton digit={2} dispatch={dispatch} />
        <DigitButton digit={3} dispatch={dispatch} />
        <DigitButton digit={4} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4">
        <DigitButton digit={5} dispatch={dispatch} />
        <DigitButton digit={6} dispatch={dispatch} />
        <DigitButton digit={7} dispatch={dispatch} />
        <DigitButton digit={8} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4">
        <DigitButton digit={5} dispatch={dispatch} />
        <DigitButton digit={6} dispatch={dispatch} />
        <DigitButton digit={7} dispatch={dispatch} />
        <DigitButton digit={8} dispatch={dispatch} />
      </div>
      <div className="grid grid-cols-4">
        <DigitButton digit={5} dispatch={dispatch} />
        <DigitButton digit={6} dispatch={dispatch} />
        <DigitButton digit={7} dispatch={dispatch} />
        <DigitButton digit={8} dispatch={dispatch} />
      </div>
    </div>
  );
}

Buttons.propTypes = {
  dispatch: PropTypes.func,
}

export default Buttons;
