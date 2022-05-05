import * as React from 'react';
import { useMultiStateValidator } from 'react-use';

const DemoStateValidator = (s: number[]) => [s.every((num: number) => !(num % 2))] as [boolean];
const MultiStateValidator = () => {
  const [state1, setState1] = React.useState<number>(1);
  const [state2, setState2] = React.useState<number>(1);
  const [state3, setState3] = React.useState<number>(1);
  const [[isValid]] = useMultiStateValidator([state1, state2, state3], DemoStateValidator);

  return (
    <div>
      <div>Below fields will be valid if all of them is even</div>
      <input type="number" min="1" max="10" value={state1}
        className="mr-2"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setState1((ev.target.value as unknown) as number);
        }}
      />
      <input type="number" min="1" max="10" value={state2}
        className="mr-2"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setState2((ev.target.value as unknown) as number);
        }}
      />
      <input type="number" min="1" max="10" value={state3}
        className="mr-3"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setState3((ev.target.value as unknown) as number);
        }}
      />
      {isValid !== null && <span>{isValid ? 'Valid!' : 'Invalid'}</span>}
    </div>
  );
};

export default MultiStateValidator;
