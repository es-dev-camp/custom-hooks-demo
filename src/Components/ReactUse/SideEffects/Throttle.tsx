import { useThrottle } from "react-use";

const Throttle = ({ value }: { value: number }) => {
  const throttledValue = useThrottle(value);

  return (
    <>
      <div>Value: {value}</div>
      <div>Throttled value: {throttledValue}</div>
    </>
  );
};

export default Throttle;
