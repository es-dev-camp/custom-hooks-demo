import { useThrottleFn } from "react-use";

const ThrottleFn = ({ value }: { value: number }) => {
  const throttledValue = useThrottleFn((value) => value, 200, [value]);

  return (
    <>
      <div>Value: {value}</div>
      <div>Throttled value: {throttledValue}</div>
    </>
  );
};

export default ThrottleFn;
