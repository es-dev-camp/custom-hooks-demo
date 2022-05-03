import { useCounter, useShallowCompareEffect } from "react-use";

const ShallowCompareEffect = () => {
  const [count, { inc: inc }] = useCounter(0);
  const options = { step: 2 };

  useShallowCompareEffect(() => {
    inc(options.step);
  }, [options]);

  return (
    <div>
      <p>useShallowCompareEffect: {count}</p>
    </div>
  );
};

export default ShallowCompareEffect;
