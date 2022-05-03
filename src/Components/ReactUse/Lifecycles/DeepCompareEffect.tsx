import { useCounter, useDeepCompareEffect } from "react-use";

const DeepCompareEffect = () => {
  const [count, { inc: inc }] = useCounter(0);
  const options = { step: 2 };

  useDeepCompareEffect(() => {
    inc(options.step);
  }, [options]);

  return (
    <div>
      <p>useDeepCompareEffect: {count}</p>
    </div>
  );
};

export default DeepCompareEffect;
