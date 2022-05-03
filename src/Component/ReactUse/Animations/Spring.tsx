import { useState } from 'react';
import useSpring from 'react-use/lib/useSpring';

const Spring = () => {
  const [target, setTarget] = useState(50);
  const value = useSpring(target);

  return (
    <div>
      {value}
      <br />
      <button className="btn btn-xs btn-outline btn-info" onClick={() => setTarget(0)}>Set 0</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => setTarget(100)}>Set 100</button>
    </div>
  );
};

export default Spring;
