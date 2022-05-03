import { useState } from "react";
import { useBoolean, useHarmonicIntervalFn } from "react-use";

const HarmonicIntervalFn = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useHarmonicIntervalFn(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
      HarmonicIntervalFn
      <div>
        delay:{" "}
        <input
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button className="btn btn-xs btn-outline btn-info" onClick={toggleIsRunning}>
          {isRunning ? "stop" : "start"}
        </button>
      </div>
    </div>
  );
};

export default HarmonicIntervalFn;
