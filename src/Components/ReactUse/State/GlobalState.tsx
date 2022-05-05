import { FC } from 'react';
import { createGlobalState } from "react-use";

const useGlobalValue = createGlobalState(0);

const CompA: FC = () => {
  const [value, setValue] = useGlobalValue();

  return <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => setValue(value + 1)}>+</button>;
};

const CompB: FC = () => {
  const [value, setValue] = useGlobalValue();

  return <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => setValue(value - 1)}>-</button>;
};

const GlobalState: FC = () => {
  const [value] = useGlobalValue();
  return (
    <div>
      <p>{value}</p>
      <CompA />
      <CompB />
    </div>
  );
};

export default GlobalState;
