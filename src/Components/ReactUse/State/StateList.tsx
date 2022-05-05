import { useStateList } from 'react-use';
import { useRef } from 'react';

const stateSet = ['first', 'second', 'third', 'fourth', 'fifth'];

const StateList = () => {
  const { state, prev, next, setStateAt, setState, currentIndex } = useStateList(stateSet);
  const indexInput = useRef<HTMLInputElement>(null);
  const stateInput = useRef<HTMLInputElement>(null);

  return (
    <div>
      <pre>
        {state} [index: {currentIndex}]
      </pre>
      <button className="btn btn-xs btn-outline btn-info" onClick={() => prev()}>prev</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => next()}>next</button>
      <br />
      <input type="text" ref={indexInput} style={{ width: 120 }} />
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => setStateAt((indexInput.current!.value as unknown) as number)}>set state by index</button>
      <br />
      <input type="text" ref={stateInput} style={{ width: 120 }} />
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => setState(stateInput.current!.value)}> set state by value</button>
    </div>
  );
};

export default StateList;
