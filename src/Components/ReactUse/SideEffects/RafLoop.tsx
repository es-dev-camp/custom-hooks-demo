import { useState } from "react";
import { useRafLoop, useUpdate } from "react-use";

const RafLoop = () => {
  const [ticks, setTicks] = useState(0);
  const [lastCall, setLastCall] = useState(0);
  const update = useUpdate();

  const [loopStop, loopStart, isActive] = useRafLoop((time) => {
    setTicks((ticks) => ticks + 1);
    setLastCall(time);
  });

  return (
    <div>
      <div>RAF triggered: {ticks} (times)</div>
      <div>Last high res timestamp: {lastCall}</div>
      <br />
      <button
        className="btn btn-xs btn-block btn-outline btn-info"
        onClick={() => {
          isActive() ? loopStop() : loopStart();
          update();
        }}
      >
        {isActive() ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default RafLoop;
