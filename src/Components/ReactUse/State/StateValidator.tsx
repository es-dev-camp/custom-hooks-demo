import {  useState } from 'react';
import { useStateValidator } from 'react-use';

const DemoStateValidator = (s: string | number): any => [s === '' ? null : (Number(s) * 1) % 2 === 0];
const StateValidator = () => {
  const [state, setState] = useState<string | number>(0);
  const [[isValid]] = useStateValidator(state, DemoStateValidator);

  return (
    <div>
      <div>Below field is valid only if number is even</div>
      <input
        className="mr-3"
        type="number"
        min="0"
        max="10"
        value={state}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setState(ev.target.value);
        }}
      />
      {isValid !== null && <span>{isValid ? 'Valid!' : 'Invalid'}</span>}
    </div>
  );
};

export default StateValidator;
