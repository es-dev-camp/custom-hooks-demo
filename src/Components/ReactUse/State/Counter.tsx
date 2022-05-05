import { useCounter } from 'react-use';

const Counter = () => {
  const [min, { inc: incMin, dec: decMin }] = useCounter(1);
  const [max, { inc: incMax, dec: decMax }] = useCounter(10);
  const [value, { inc, dec, set, reset }] = useCounter(5, max, min);

  return (
    <div>
      <div>
        current: {value} [min: {min}; max: {max}]
      </div>

      <br />
      Current value: <button className="btn btn-xs btn-outline btn-info" onClick={() => inc()}>Increment</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => dec()}>Decrement</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => inc(5)}>Increment (+5)</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => dec(5)}>Decrement (-5)</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => set(100)}>Set 100</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => reset()}>Reset</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => reset(25)}>Reset (25)</button>

      <br />
      <br />
      Min value:
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => incMin()}>Increment</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => decMin()}>Decrement</button>

      <br />
      <br />
      Max value:
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => incMax()}>Increment</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => decMax()}>Decrement</button>
    </div>
  );
};

export default Counter;
