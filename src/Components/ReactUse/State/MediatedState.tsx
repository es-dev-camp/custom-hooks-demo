import * as React from 'react';
import { useMediatedState } from 'react-use';

const inputMediator = (s: string) => s.replace(/[\s]+/g, ' ');
const MediatedState = () => {
  const [state, setState] = useMediatedState(inputMediator, '');

  return (
    <div>
      <div>You will not be able to enter more than one space</div>
      <input type="text" min="0" max="10"
        value={state}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setState(ev.target.value);
        }}
      />
    </div>
  );
};

export default MediatedState;
