import { useCounter, useCustomCompareEffect } from "react-use";
import { dequal } from "dequal";

const CustomCompareEffect = () => {
  const [count, { inc: inc }] = useCounter(0);
  const options = { step: 2 };

  useCustomCompareEffect(
    () => {
      inc(options.step);
    },
    [options],
    (prevDeps, nextDeps) => dequal(prevDeps, nextDeps)
  );

  return (
    <div>
      <p>useCustomCompareEffect with deep comparison: {count}</p>
    </div>
  );
};

export default CustomCompareEffect;
