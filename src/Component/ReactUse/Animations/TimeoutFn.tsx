import { useCallback, useState } from "react";
import { useTimeoutFn } from "react-use";

const TimeoutFn = () => {
  const [state, setState] = useState("Not called yet");

  const fn = (): void => {
    setState(`called at ${(new Date()).toLocaleString('ja')}`);
  };

  const [isReady, cancel, reset] = useTimeoutFn(fn, 5000);
  const cancelButtonClick = useCallback(() => {
    if (isReady() === false) {
      cancel();
      setState(`cancelled`);
    } else {
      reset();
      setState("Not called yet");
    }
  }, []);

  const readyState = isReady();

  return (
    <div>
      <div>
        {readyState !== null
          ? "Function will be called in 5 seconds"
          : "Timer cancelled"}
      </div>
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={cancelButtonClick}
      >
        {" "}
        {readyState === false ? "cancel" : "restart"} timeout
      </button>
      <br />
      <div>
        Function state:{" "}
        {readyState === false ? "Pending" : readyState ? "Called" : "Cancelled"}
      </div>
      <div>{state}</div>
    </div>
  );
};

export default TimeoutFn;
