import { useState } from "react";
import { useBoolean, useInterval } from "react-use";

const Interval = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
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

export default Interval;
